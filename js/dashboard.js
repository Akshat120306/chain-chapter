import { auth, db } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const taskList = document.getElementById("taskList");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const q = query(collection(db, "tasks"), where("assignedTo", "==", user.uid));
    const querySnapshot = await getDocs(q);

    taskList.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      taskList.innerHTML += `<li class="p-2 border-b">${task.text}</li>`;
    });
  } else {
    window.location.href = "login.html";
  }
});
