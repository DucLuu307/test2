const firebaseConfig = {
    apiKey: "AIzaSyDyovdWHCdFI4mo2TrLTcDkT0vadGGYzew",
    authDomain: "thuc-hanh-chuyen-sau-ef096.firebaseapp.com",
    databaseURL: "https://thuc-hanh-chuyen-sau-ef096-default-rtdb.firebaseio.com",
    projectId: "thuc-hanh-chuyen-sau-ef096",
    storageBucket: "thuc-hanh-chuyen-sau-ef096.appspot.com",
    messagingSenderId: "1004545709498",
    appId: "1:1004545709498:web:a48a1baf88e71d4216f983",
    measurementId: "G-8XD24VNH63"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
database.ref("/thomepage/Nhiet Do").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("temp").innerHTML = temp;
});
database.ref("/thomepage/Do Am").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("hum").innerHTML = temp;
});

database.ref("/thomepage/Nhiet Do").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("tempMobile").innerHTML = temp;
});
database.ref("/thomepage/Do Am").on("value",function(snapshot){
    var temp = snapshot.val();
    document.getElementById("humMobile").innerHTML = temp;
});
database.ref("/thomepage/open").on("value",function(snapshot){
    var temp = snapshot.val();
    if(temp == 1){
        document.getElementById("recive").innerHTML = "Mở";
        document.getElementById("recive").style.color = "Gold"
        document.getElementById("recive").style.fontWeight = "bold"


        
    }
    else{
        document.getElementById("recive").innerHTML = "Tắt";

    }
    // if( temp == 1){
    //     dis2.style.display = "block";
    // }
    // else{
    //     var load2 = four.querySelector('.load')
    //     load2.style.display = "none";
    // }
});



var notifi = document.getElementById('notifi')
notifi.onclick = () =>{
    var change = document.querySelector('.menu-notifi')
    if(change.classList.contains("active")){
        change.classList.remove("active");
    }else{
        change.classList.add("active");
    }

}
var notifi = document.getElementById('chat')
notifi.onclick = () =>{
    var change = document.querySelector('.popupMess')
    if(change.classList.contains("active")){
        change.classList.remove("active");
    }else{
        change.classList.add("active");
    }

}

function year(){
    var today  = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = today.toLocaleDateString("en-US", options);
    document.querySelector(".month").innerHTML = date;
}
function dongho(){
    var today = new Date();
    var gio = today.getHours();
    var phut = today.getMinutes();
    var giay = today.getSeconds();

    if(gio<10){
        gio = "0" + gio;
    }
    if(phut<10){
        phut = "0" + phut;
    }
    if(giay<10){
        giay = "0" + giay;
    }
    document.getElementById("time").innerHTML = gio + ":" + phut + ":" + giay;
    setTimeout("dongho()",1000);
}