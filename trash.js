import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyOqMSDLg97Enn6-rKrQxTnAx1ptAl6Qo",
  authDomain: "firedumpsite.firebaseapp.com",
  databaseURL: "https://firedumpsite-default-rtdb.firebaseio.com",
  projectId: "firedumpsite",
  storageBucket: "firedumpsite.appspot.com",
  messagingSenderId: "663704728863",
  appId: "1:663704728863:web:52e04164b775984790ec2a",
  measurementId: "G-6GDL6SHRP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function toggleVisibility(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
    alert("welcome")
};

function toggle(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
};

function toggle(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('login-div').style.display="none";
      document.getElementById('result').innerHTML="Welcome Back<br>"+ loginEmail+" was login Successfully";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('result-box').style.display="inline";
      document.getElementById('login-div').style.display="none";
      document.getElementById('result').innerHTML="Sorry! <br>"+ loginEmail;

    });
  
}

document.addEventListener('click', function(event) {
    if (event.target.id === 'reg-btn') {
        document.getElementById('register-div').style.display = "inline";
        document.getElementById('login-div').style.display = "none";
        alert("welcome");
    } else if (event.target.id === 'home-btn') {
        alert("welcome home");
    }
});