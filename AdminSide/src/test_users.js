import { db } from "./Firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

async function testFetch() {
  try {
    console.log("Attempting to fetch users...");
    const snap = await getDocs(collection(db, "users"));
    console.log("Success! Found " + snap.docs.length + " users.");
  } catch (err) {
    console.error("Fetch failed:", err.code, err.message);
  }
}

testFetch();
