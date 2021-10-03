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
  document.getElementById("user_name").value= "Welcome " + user_name + "!!";

  function addRoom(){
    roomName= document.getElementById("roomInput").value;
    firebase.database().ref("/").child(roomName).update({
      purpose: "adding room"
    });
    window.location= "kwitter_page.html";
  }
  function getData(){
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
console.log("Room Name- "+ Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>"
document.getElementById("output").innerHTML+= row;
//End code
});});}}
getData();
function redirectToRoomName(){
  localStorage.setItem("room_name", roomName);
  window.location= "kwitter_page.html";
}
function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}