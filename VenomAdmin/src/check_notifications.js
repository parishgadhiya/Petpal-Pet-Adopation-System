import { db } from "./Firebaseconfig";
import { collection, getDocs, limit, query } from "firebase/firestore";

async function checkNotifications() {
  try {
    const q = query(collection(db, "notifications"), limit(5));
    const snapshot = await getDocs(q);
    console.log("Found " + snapshot.docs.length + " notifications");
    snapshot.docs.forEach(doc => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error("Error fetching notifications:", error);
  }
}

checkNotifications();
