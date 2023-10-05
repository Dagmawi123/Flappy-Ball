var ball=document.getElementById('ball');
var pad1=document.getElementById('pad1');
var pad2=document.getElementById('pad2');
let  ballTop=0
var score=0;
var highScore=0
var scr=document.getElementById("score")
var hiscr=document.getElementById("hiscore")
var crash=setInterval(collision,10)
//downward movement
timer= setInterval(function(){
ballTop=parseInt(window.getComputedStyle(ball).getPropertyValue('top'))  
ball.style.top=(ballTop+10)+"px"
if(pad1.offsetLeft>50&&crashed){
crash=setInterval(collision,10)
crashed=false}
scr.innerHTML="Score: "+score.toString()
hiscr.innerHTML="High Score: "+highScore.toString()  
 },100);
 //onclick moving up
 function moveUp() {
    ballTop=parseInt(window.getComputedStyle(ball).getPropertyValue('top'))  
ball.style.top=(ballTop-30)+"px"
 }
 //logic handling(hit and moving out of bounds)
 var crashed=false
function collision(){
    if(ball.offsetTop<=0||ball.offsetTop>470){
        alert('GameOver!!, Your score is '+score)
     clearInterval(crash)
     newHighScore(score)
     score=0
     crashed=true
     ball.style.top=250+"px"
         }
    else if(pad1.offsetLeft<=50){
            if(ball.offsetTop>=pad2.offsetTop|| ball.offsetTop<=pad1.offsetHeight){
                alert('GameOver!!, Your score is '+score)
                clearInterval(crash)
                crashed=true
                ball.style.top=250+"px"
                newHighScore(score)
            score=0
            }
}}

//every pad iteration(change in height of the pads and score )
pad1.addEventListener('animationiteration',()=>{    
pad1.style.height=Math.random()*300+"px"
pad2.style.height=400-parseInt(pad1.style.height)+"px"  
pad2.style.top=500-parseInt(pad2.style.height)+"px" 
if(!crashed)
score++;
})
function newHighScore(current_score){
if(current_score>highScore)
highScore=current_score
}
