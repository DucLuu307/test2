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



// var notifi = document.getElementById('notifi')
// notifi.onclick = () =>{
//     var change = document.querySelector('.menu-notifi')
//     if(change.classList.contains("active")){
//         change.classList.remove("active");
//     }else{
//         change.classList.add("active");
//     }

// }


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
// var prevScrollpos = window.pageYOffset;
//  window.onscroll = function() {
//  var currentScrollPos = window.pageYOffset;
//  if (prevScrollpos > currentScrollPos) {
//  document.getElementById("header").classList.remove('show');
//  }
//  else { document.getElementById("header").classList.add('show');
//  }
//  prevScrollpos = currentScrollPos;
//  }
var tb1 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb1.length;i++){
    var c = tb1[0].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("garage").update({
                "rolling door":1,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[0];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }
            else{
                three.classList.add("change");
            }
            var dis3 = three.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = three.querySelector('.load')
            load3.style.display = "block";
            var icon3 = three.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("garage").update({
                "rolling door":0,
            })

            var tb1 = document.querySelectorAll('.devcie');
            var three = tb1[0];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }    
            var dis2 = three.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = three.querySelector('.load')
            load2.style.display = "none";
            var icon3 = three.querySelector('.icon');
            icon3.classList.remove('back')
        }
    }
}
var tb2 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb2.length;i++){
    var c = tb2[1].querySelector('input')
        firebase.database().ref('livingroom/tivi/').once('value', function(snap){
        var checkDishWare = JSON.stringify(snap.val());
        if(checkDishWare){
            var tb2 = document.querySelectorAll('.devcie');
            var two = tb2[1];
            two.classList.add("change");
            var dis2 = two.querySelector('.dis-not')
            dis2.style.display = "none";
            var load2 = two.querySelector('.load')
            load2.style.display = "block";
            var icon2 = two.querySelector('.icon');
            icon2.classList.add('back');
        }else{
            var tb2 = document.querySelectorAll('.devcie');
            var two = tb2[1];
            if(two.classList.contains('change')){
                two.classList.remove('change');
            }
            var dis2 = two.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = two.querySelector('.load')
            load2.style.display = "none";
            var icon2 = two.querySelector('.icon');
            icon2.classList.remove('back')
        }
    })
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("livingroom").update({
                "tivi":1,
            })

            var tb2 = document.querySelectorAll('.devcie');
            var two = tb2[1];
            if(two.classList.contains('change')){
                two.classList.remove('change');
            }
            else{
                two.classList.add("change");
            }
            var dis2 = two.querySelector('.dis-not')
            dis2.style.display = "none";
            var load2 = two.querySelector('.load')
            load2.style.display = "block";
            var icon2 = two.querySelector('.icon');
            icon2.classList.add('back');
        }
        else{
            var tb2 = document.querySelectorAll('.devcie');
            var two = tb2[1];
            database.ref("livingroom").update({
                "tivi":0,
            })
            if(two.classList.contains('change')){
                two.classList.remove('change');
            }
            var dis2 = two.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = two.querySelector('.load')
            load2.style.display = "none";
            var icon2 = two.querySelector('.icon');
            icon2.classList.remove('back')
        }
    }
}


var tb3 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb3.length;i++){
    var c = tb3[2].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("office").update({
                "computer":1,
            })
            var tb3 = document.querySelectorAll('.devcie');
            var three = tb3[2];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }
            else{
                three.classList.add("change");
            }
            var dis3 = three.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = three.querySelector('.load')
            load3.style.display = "block";
            var icon3 = three.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("office").update({
                "computer":0,
            })
            var tb3 = document.querySelectorAll('.devcie');
            var three = tb3[2];
            if(three.classList.contains('change')){
                three.classList.remove('change');
            }    
            var dis2 = three.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = three.querySelector('.load')
            load2.style.display = "none";
            var icon3 = three.querySelector('.icon');
            icon3.classList.remove('back')
        }
    }
}
var tb4 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb4.length;i++){
    var c = tb4[3].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){

            var tb4 = document.querySelectorAll('.devcie');
            var four = tb4[3];
            if(four.classList.contains('change')){
                four.classList.remove('change');
            }
            else{
                four.classList.add("change");
            }
            var dis3 = four.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = four.querySelector('.load')
            load3.style.display = "block";
            var icon3 = four.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{

            var tb4 = document.querySelectorAll('.devcie');
            var four = tb4[3];
            if(four.classList.contains('change')){
                four.classList.remove('change');
            }  
            var dis2 = four.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = four.querySelector('.load')
            load2.style.display = "none";
            var icon3 = four.querySelector('.icon');
            icon3.classList.remove('back')  
        }
    }
}
var tb5 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb5.length;i++){
    var c = tb5[4].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("thomepage").update({
                "fan":1,
            })
            var tb5 = document.querySelectorAll('.devcie');
            var five = tb5[4];
            if(five.classList.contains('change')){
                five.classList.remove('change');
            }
            else{
                five.classList.add("change");
            }
            var dis3 = five.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = five.querySelector('.load')
            load3.style.display = "block";
            var icon3 = five.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("thomepage").update({
                "fan":0,
            })
            var tb5 = document.querySelectorAll('.devcie');
            var five = tb5[4];
            if(five.classList.contains('change')){
                five.classList.remove('change');
            }  
            var dis2 = five.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = five.querySelector('.load')
            load2.style.display = "none";
            var icon3 = five.querySelector('.icon');
            icon3.classList.remove('back')    
        }
    }
}
var tb6 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb6.length;i++){
    var c = tb6[5].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            database.ref("bedroom").update({
                "lamp lights":1,
            })
            var tb6 = document.querySelectorAll('.devcie');
            var six = tb6[5];
            if(six.classList.contains('change')){
                six.classList.remove('change');
            }
            else{
                six.classList.add("change");
            }
            var dis3 = six.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = six.querySelector('.load')
            load3.style.display = "block";
            var icon3 = six.querySelector('.icon');
            icon3.classList.add('back');
        }
        else{
            database.ref("bedroom").update({
                "lamp lights":0,
            })
            var tb6 = document.querySelectorAll('.devcie');
            var six = tb6[5];
            if(six.classList.contains('change')){
                six.classList.remove('change');
            }   
            var dis2 = six.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = six.querySelector('.load')
            load2.style.display = "none";
            var icon3 = six.querySelector('.icon');
            icon3.classList.remove('back')  
        }
    }
}
var tb7 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb7.length;i++){
    var c = tb7[6].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            var tb7 = document.querySelectorAll('.devcie');
            var seven = tb7[6];
            if(seven.classList.contains('change')){
                seven.classList.remove('change');
            }
            else{
                seven.classList.add("change");
            }
            var dis3 = seven.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = seven.querySelector('.load')
            load3.style.display = "block";
            var icon3 = seven.querySelector('.icon');
            icon3.classList.add('back');

        }
        else{
            var tb7 = document.querySelectorAll('.devcie');
            var seven = tb7[6];
            if(seven.classList.contains('change')){
                seven.classList.remove('change');
            }    
            var dis2 = seven.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = seven.querySelector('.load')
            load2.style.display = "none";
            var icon3 = seven.querySelector('.icon');
            icon3.classList.remove('back') 
        }
    }
}
var tb8 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb8.length;i++){
    var c = tb8[7].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){
            var tb8 = document.querySelectorAll('.devcie');
            var eight = tb8[7];
            if(eight.classList.contains('change')){
                eight.classList.remove('change');
            }
            else{
                eight.classList.add("change");
            }
            var dis3 = eight.querySelector('.dis-not')
            dis3.style.display = "none";
            var load3 = eight.querySelector('.load')
            load3.style.display = "block";
            var icon3 = eight.querySelector('.icon');
            icon3.classList.add('back');

        }
        else{
            var tb8 = document.querySelectorAll('.devcie');
            var eight = tb8[7];
            if(eight.classList.contains('change')){
                eight.classList.remove('change');
            }    
            var dis2 = eight.querySelector('.dis-not')
            dis2.style.display = "block";
            var load2 = eight.querySelector('.load')
            load2.style.display = "none";
            var icon3 = eight.querySelector('.icon');
            icon3.classList.remove('back') 
        }
    }
}
var tb9 = document.querySelectorAll('.devcie')
for( var i = 0;i<tb9.length;i++){
    var c = tb9[8].querySelector('input')
    c.onchange = function(e){
        if(e.target.checked){

            var tb9 = document.querySelectorAll('.devcie');
            var nine = tb9[8];
            if(nine.classList.contains('change')){
                nine.classList.remove('change');
            }
            else{
                nine.classList.add("change");
            }
            var dis1 = nine.querySelector('.dis-not')
            dis1.style.display = "none";
            var load1 = nine.querySelector('.load')
            load1.style.display = "block";
            var icon1 = nine.querySelector('.icon');
            icon1.classList.add('back');
        }
        else{

            var tb9 = document.querySelectorAll('.devcie'); 
            var nine = tb9[8];
            if(nine.classList.contains('change')){
                nine.classList.remove('change');
            }
            var dis1 = nine.querySelector('.dis-not')
            dis1.style.display = "block";
            var load1 = nine.querySelector('.load')
            load1.style.display = "none";
            var icon1 = nine.querySelector('.icon');
            icon1.classList.remove('back')
        }
    }
}



// var tb10 = document.querySelectorAll('.devcie');
// for( var i = 0;i<tb10.length;i++){
//     var d = tb10[9].querySelector('input')
//     d.onchange = function(e){
//         if(e.target.checked){
//             database.ref("kitchen").update({
//                 "cooker-hood":1,
//             })
//             var tb10 = document.querySelectorAll('.devcie');
//             var ten = tb10[9];
//             if(ten.classList.contains('change')){
//                 ten.classList.remove('change');
//             }
//             else{
//                 ten.classList.add("change");
//             }
//             var dis1 = ten.querySelector('.dis-not')
//             dis1.style.display = "none";
//             var load1 = ten.querySelector('.load')
//             load1.style.display = "block";
//             var icon1 = ten.querySelector('.icon');
//             icon1.classList.add('back');
//         }
//         else{
//             database.ref("kitchen").update({
//                 "cooker-hood":0,
//             })
//             var tb10 = document.querySelectorAll('.devcie'); 
//             var ten = tb10[9];
//             if(ten.classList.contains('change')){
//                 ten.classList.remove('change');
//             }
//             var dis1 = ten.querySelector('.dis-not')
//             dis1.style.display = "block";
//             var load1 = ten.querySelector('.load')
//             load1.style.display = "none";
//             var icon1 = ten.querySelector('.icon');
//             icon1.classList.remove('back')
//         }
//     }
// }

// var nhietdo = document.getElementById("btnApply")
// nhietdo.onclick = function(e){
//     var n = document.getElementById('present').value;
//     var send = document.getElementById('temperature').value;
//     if(send != n){
//         document.getElementById('present').value = send;
//     }

// }

// var switchAirConditioner = document.getElementById("switch-air-conditioner");
// var activeClass = document.getElementById('active-air-conditioner');

// firebase.database().ref('/kitchen/air_conditioner').once('value', function(snap){
//     var checkAirConditioner = +JSON.stringify(snap.val());
//     if(checkAirConditioner){
//         switchAirConditioner.classList.add("toggle-on");
//         activeClass.classList.add("change");
//     }else{
//         switchAirConditioner.classList.remove('toggle-on');
//         activeClass.classList.remove('change');
//     }
// })

// switchAirConditioner.onclick = function(e) {
//     e.preventDefault();
//     switchAirConditioner.classList.toggle("toggle-on");
//     activeClass.classList.toggle("change"); 
//     var checkClass = switchAirConditioner.classList.contains('toggle-on')
//     if(checkClass){
//         database.ref("/kitchen").update({
//             "air_conditioner":1
//         })
//     }else{
//         database.ref("/kitchen").update({
//             "air_conditioner":0
//         })
//     }
// };

// var switchDishware = document.getElementById("switchDishware");
// var activeDishware = document.getElementById('active-dishware');

// firebase.database().ref('/kitchen/dishware').once('value', function(snap){
//     var checkDishware = +JSON.stringify(snap.val());
//     if(checkDishware){
//         switchDishware.classList.add("toggle-on");
//         activeDishware.classList.add("change");
//     }else{
//         switchDishware.classList.remove('toggle-on');
//         activeDishware.classList.remove('change');
//     }
// })

// switchDishware.onclick = function(e) {
//     e.preventDefault();
//     switchDishware.classList.toggle("toggle-on");
//     activeDishware.classList.toggle("change"); 
//     var checkClass = switchDishware.classList.contains('toggle-on')
//     if(checkClass){
//         database.ref("/kitchen").update({
//             "dishware":1
//         })
//     }else{
//         database.ref("/kitchen").update({
//             "dishware":0
//         })
//     }
// };

// var switchCelling = document.getElementById("switchcelling");
// var activeCelling = document.getElementById('active-celling');

// firebase.database().ref('/kitchen/dishware').once('value', function(snap){
//     var checkDishware = +JSON.stringify(snap.val());
//     if(checkDishware){
//         switchCelling.classList.add("toggle-on");
//         activeCelling.classList.add("change");
//     }else{
//         switchCelling.classList.remove('toggle-on');
//         activeDishware.classList.remove('change');
//     }
// })

// switchDishware.onclick = function(e) {
//     e.preventDefault();
//     switchDishware.classList.toggle("toggle-on");
//     activeDishware.classList.toggle("change"); 
//     var checkClass = switchDishware.classList.contains('toggle-on')
//     if(checkClass){
//         database.ref("/kitchen").update({
//             "dishware":1
//         })
//     }else{
//         database.ref("/kitchen").update({
//             "dishware":0
//         })
//     }
// };