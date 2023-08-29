var bubble = "";
var hitval;
var time=60;
var score=0;
var clickedbubble;
var hit;

function makebubble(){
    for(var i = 1; i<= 168; i++){
    hitval=Math.floor(Math.random()*10);
    bubble += `<div class="bubble"> ${hitval}</div>`;
}
console.log(i);

document.querySelector(".pbtm").innerHTML= bubble;
}


function Timer(){
    setInterval(function(){
        if(time>=0){
            var newtime=time--;
            document.querySelector('#timervalueid').textContent=newtime;
        }
        else{
            
            document.querySelector("#panelbotid").innerHTML ="";
            clearInterval(Timer());
        }
        
    },1000 )
}
                    
function scoreval(){
       score += 10;
       document.querySelector('#scorenow').textContent =score;
}


function getNewHitVal(){
    hit= Math.floor(Math.random()*10);
    document.querySelector('#hitid').textContent = hit;
}

document.querySelector("#panelbotid")
.addEventListener("click", function(details){
    var myval=Number(details.target.textContent);
    if(myval === hit){
        makebubble()
        scoreval();
        getNewHitVal();
    }
})











getNewHitVal();
Timer();
makebubble();