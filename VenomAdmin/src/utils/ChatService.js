import { db } from "../Firebaseconfig";
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
  getDoc,
  where
} from "firebase/firestore";

const ADMIN_ID = localStorage.getItem("adminUsername") || "admin";

export const ChatService = {
  // Send message to user
  sendMessage: async (userId, text) => {
    const chatRef = doc(db, "chats", userId);
    const messagesRef = collection(db, "chats", userId, "messages");

    const messageData = {
      senderId: ADMIN_ID,
      receiverId: userId,
      text,
      timestamp: serverTimestamp(),
      seen: false,
    };

    // Add message
    await addDoc(messagesRef, messageData);

    // Update metadata
    await updateDoc(chatRef, {
      lastMessage: text,
      lastMessageTime: serverTimestamp(),
      lastSenderId: ADMIN_ID,
      unreadCountUser: increment(1),
      updatedAt: serverTimestamp()
    });
  },

  // Listen for messages in a specific chat
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

  // Listen for all chats (for the admin list)
  listenAllChats: (callback) => {
    const q = query(collection(db, "chats"), orderBy("updatedAt", "desc"));
    return onSnapshot(q, (snapshot) => {
      const chats = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(chats);
    });
  },

  // Mark chat as read for admin
  markAsRead: async (userId) => {
    const chatRef = doc(db, "chats", userId);
    try {
      await updateDoc(chatRef, { unreadCountAdmin: 0 });
    } catch (e) {
      console.error("Error marking as read", e);
    }
  },

  // Typing status
  setTypingStatus: async (userId, isTyping) => {
    const chatRef = doc(db, "chats", userId);
    try {
      await updateDoc(chatRef, { adminTyping: isTyping });
    } catch (e) {
       // Chat might not exist
    }
  },

  // Listen for user details (in case they change)
  listenChat: (userId, callback) => {
    return onSnapshot(doc(db, "chats", userId), (doc) => {
      if (doc.exists()) {
        callback({ id: doc.id, ...doc.data() });
      }
    });
  }
};
