var firebaseConfig = {
    apiKey: "AIzaSyAQcYSbbAvlWCXnhxWPjczmZBI8hsKZ3ck",
    authDomain: "kwitter-83383.firebaseapp.com",
    databaseURL: "https://kwitter-83383-default-rtdb.firebaseio.com",
    projectId: "kwitter-83383",
    storageBucket: "kwitter-83383.appspot.com",
    messagingSenderId: "470025914370",
    appId: "1:470025914370:web:fd0d1670f33c7ca47a3f1b"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


function adduser() {
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
    }