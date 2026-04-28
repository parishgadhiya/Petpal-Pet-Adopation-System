import { db } from "../firebaseconfig";
import { 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  serverTimestamp,
  increment,
  getDoc
} from "firebase/firestore";

const ADMIN_ID = "admin"; // Static ID for admin for messaging context

export const ChatService = {
  // Send a message
  sendMessage: async (userId, senderId, text, petContext = null) => {
    const isUser = senderId !== ADMIN_ID;
    const chatId = userId;
    const chatRef = doc(db, "chats", chatId);
    const messagesRef = collection(db, "chats", chatId, "messages");

    const messageData = {
      senderId,
      receiverId: isUser ? ADMIN_ID : userId,
      text,
      timestamp: serverTimestamp(),
      seen: false,
    };

    if (petContext) {
      messageData.petId = petContext.petId;
      messageData.petName = petContext.petName;
    }

    // Add message
    await addDoc(messagesRef, messageData);

    // Update chat metadata
    const chatUpdate = {
      lastMessage: text,
      lastMessageTime: serverTimestamp(),
      lastSenderId: senderId,
      updatedAt: serverTimestamp(),
    };

    if (isUser) {
      chatUpdate.unreadCountAdmin = increment(1);
    } else {
      chatUpdate.unreadCountUser = increment(1);
    }

    // Check if chat doc exists, if not create it with user info
    const chatSnap = await getDoc(chatRef);
    if (!chatSnap.exists() && isUser) {
      // Try to get user data for metadata
      const userSnap = await getDoc(doc(db, "users", userId));
      const userData = userSnap.exists() ? userSnap.data() : {};
      
      chatUpdate.userId = userId;
      chatUpdate.userName = userData.name || "Unknown User";
      chatUpdate.userEmail = userData.email || "No Email";
      chatUpdate.createdAt = serverTimestamp();
      
      await setDoc(chatRef, chatUpdate);
    } else {
      await updateDoc(chatRef, chatUpdate);
    }
  },

  // Listen for messages
  listenMessages: (userId, callback) => {
    const q = query(
      collection(db, "chats", userId, "messages"),
      orderBy("timestamp", "asc")
    );
    return onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(messages);
    });
  },

  // Listen for chat metadata
  listenChatMetadata: (userId, callback) => {
    return onSnapshot(doc(db, "chats", userId), (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() });
      } else {
        callback(null);
      }
    });
  },

  // Mark messages as seen
  markAsSeen: async (userId, role) => {
    const chatRef = doc(db, "chats", userId);
    const updateData = {};
    if (role === "admin") {
      updateData.unreadCountAdmin = 0;
    } else {
      updateData.unreadCountUser = 0;
    }
    
    try {
      await updateDoc(chatRef, updateData);
    } catch (error) {
       console.error("Error marking as seen:", error);
    }
  },

  // Update typing status
  setTypingStatus: async (userId, role, isTyping) => {
    const chatRef = doc(db, "chats", userId);
    const field = role === "admin" ? "adminTyping" : "userTyping";
    try {
      await updateDoc(chatRef, { [field]: isTyping });
    } catch (error) {
       // Ignore errors if chat doesn't exist yet
    }
  }
};
