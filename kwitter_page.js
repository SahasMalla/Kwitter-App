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

    room_name = localStorage.getItem("Room");
    username = localStorage.getItem("Username");

    function send()
    {
           message = document.getElementById("message_input").value;
           firebase.database().ref(room_name).push({
                 Message: message,
                 Like: 0,
                 Username: username
           });

           document.getElementById("message_input").value="";
    }

    function logout()
    {
          localStorage.removeItem("Username");
          localStorage.removeItem("Room");
          window.location="index.html";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

name = message_data['Username'];
message = message_data['Message'];
like = message_data['Like'];

name_with_tag = "<h4>" + name + " <img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<label>" + message + "</label> <br>";
like_with_tag = "<button class='btn btn-info' id= "+firebase_message_id +"value ="+like+"onclick='update_like(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span> </button>" + "<hr>";

row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function update_like(message_id)
{
      button_id = message_id;
      get_likes = document.getElementById(button_id).value;
      updated_likes  = Number(get_likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
            Like: updated_likes
      });
}