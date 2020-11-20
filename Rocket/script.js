var e=document.querySelector(".shoot");
var s=document.querySelectorAll(".rocket");
var d=document.querySelectorAll(".circle");
var h=document.getElementsByTagName("h1");
e.addEventListener("click",function(){
    while(true){
        if(e.value=="start"){
            for (var i = 0; i < s.length; i++) {
                s[i].style.animationName="rocket_shoot_"+(i+1);
                s[i].style.boxShadow="-30px 0px 10px orange";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.animationName="super_burst";
            }
            h[0].style.animationName="transition";
            e.value="stop";
            console.log("started");
            break;
        }
        if(e.value=="stop"){
            for (var i = 0; i < s.length; i++) {
                s[i].style.animationName="none";
                s[i].style.boxShadow="none";
            }
            for (var i = 0; i < d.length; i++) {
                d[i].style.animationName="none";
            }
            h[0].style.animationName="none";
            e.value="start";
            console.log("stopped");
            break;
        }
    }
});
