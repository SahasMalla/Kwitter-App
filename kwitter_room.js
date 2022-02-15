
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBwxA50h0sn6zcvNCHavECAgyEjBZ3Qhh4",
      authDomain: "kwitter---vs-code.firebaseapp.com",
      databaseURL: "https://kwitter---vs-code-default-rtdb.firebaseio.com",
      projectId: "kwitter---vs-code",
      storageBucket: "kwitter---vs-code.appspot.com",
      messagingSenderId: "137442083883",
      appId: "1:137442083883:web:5b298004e70b8b0e19166e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

var welcome = localStorage.getItem("Username");
document.getElementById("welcome").innerHTML="Welcome " + welcome + "!";

function addRoom()
{
      Room = document.getElementById("addRoom").value;
      firebase.database().ref("/").child(Room).update
      ({
            purpose:"Adding Room"
      });
      localStorage.setItem("Room", Room);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room_name" + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' > #"+ Room_names+"</div>"+"<hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("Room", name);
      window.location="kwitter_page.html";
}

function logout()
    {
          localStorage.removeItem("Username");
          localStorage.removeItem("Room");
          window.location="index.html";

    }