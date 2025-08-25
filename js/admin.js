import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("addTaskBtn").addEventListener("click", async () => {
  const text = document.getElementById("taskText").value.trim();
  const userId = document.getElementById("userId").value.trim();
  const role = document.getElementById("roleSelect").value;

  if (!text) {
    alert("Please enter a task description.");
    return;
  }

  try {
    if (userId) {
      await addDoc(collection(db, "tasks"), {
        text: text,
        assignedTo: userId,
        date: new Date()
      });
    } else if (role) {
      const usersSnapshot = await getDocs(collection(db, "users"));
      usersSnapshot.forEach(async (userDoc) => {
        const userData = userDoc.data();
        if (role === "all" || userData.role === role) {
          await addDoc(collection(db, "tasks"), {
            text: text,
            assignedTo: userDoc.id,
            date: new Date()
          });
        }
      });
    } else {
      alert("Please enter a UID or select a role.");
      return;
    }

    alert("Task(s) assigned successfully!");
    document.getElementById("taskText").value = "";
    document.getElementById("userId").value = "";
    document.getElementById("roleSelect").value = "";
  } catch (err) {
    alert(err.message);
  }
});
