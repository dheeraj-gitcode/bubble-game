var score = 0;
var timer = 60;
var randomHitNum = 0;

function incrementScore(){
    score +=  10;
    document.querySelector("#score").textContent = score;
}
function runTimer(){
    setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent= timer;
        }else{
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
function newHit(){
    randomHitNum = Math.floor(Math.random()*10)
    document.querySelector("#hitnumber").textContent = randomHitNum;
}
function makebubble(){

    var clutter = "";
    for(var i=1;i<=96;i++){
        var random = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${random}</div>`;
    }

    document.querySelector("#pbtm").innerHTML=clutter;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === randomHitNum){
        incrementScore();
        makebubble();
        newHit();
    }
})

makebubble();
runTimer();
newHit();