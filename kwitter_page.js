const firebaseConfig = {
    apiKey: "AIzaSyCzlHQ_6-K69DUYtMHog5T0ouPAUqnTJ-k",
    authDomain: "project-93-to-96.firebaseapp.com",
    databaseURL: "https://project-93-to-96-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project-93-to-96",
    storageBucket: "project-93-to-96.appspot.com",
    messagingSenderId: "500891281775",
    appId: "1:500891281775:web:d9b198091b3f19a05fe09a",
    measurementId: "G-XW73554HV6"
  };

  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send(){
      message= document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("message").value= "";
}