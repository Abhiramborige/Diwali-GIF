var e=document.querySelector(".shoot");
var d=document.querySelectorAll(".fire");
var h=document.getElementsByTagName("h1");
e.addEventListener("click",function(){
    while(true){
        if(e.value=="start"){
            for (var i = 0; i < d.length; i++) {
                d[i].style.animationName="burst";
            }
            h[0].style.animationName="transition";
            e.value="stop";
            console.log("started");
            break;
        }
        if(e.value=="stop"){
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

/* To make the second flowerpot a bit smaller than first */
/* Choosing the second flowerpot */
var q=document.getElementsByClassName("master")[1].getElementsByClassName("fire");
for(var i = 0; i < q.length; i++) {
    var he=Number(window.getComputedStyle(q[i],null).height.replace(/[^0-9\,\.]/g, ''));
    var wi=Number(window.getComputedStyle(q[i],null).width.replace(/[^0-9\,\.]/g, '')); 
    /* Converting px to vh */
    he=Math.ceil(he*(100/(window.innerHeight)));
    wi=Math.ceil(wi*(100/(window.innerHeight)))
    /* Making changes for second flowerpot */
    /* Decresing the height and width by 50% */
    q[i].style.height=(he-((he)*50/100))+'vh';
    q[i].style.width=(wi-((wi)*50/100))+'vh';
}