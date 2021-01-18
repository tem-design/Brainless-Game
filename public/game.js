/* if you want to customize with your Image, 
you must change the src attribute in html File.
if you want more than 7 items , 
you will have to change this 
if(i>6){
    i = 0;
} in the startTheGame function. */


var gameItems = [
    document.getElementById("beer"),
    document.getElementById("burger"),
    document.getElementById("candy"),
    document.getElementById("drink"),
    document.getElementById("chicken"),
    document.getElementById("ice-cream"),
    document.getElementById("pizza"),
    document.getElementById("ramen"),
    document.getElementById("sushi"),
    document.getElementById("watermelon")
];

var stopBtn = document.getElementById('stop-btn');
var gameImageContainer = document.getElementById("game-image-container");
var itemLoop = 0; 
var loopGameAnimation, winItem; 
var clickGameBtn = true;
var startGame = true;


if(startGame){
    startTheGame();
    startGame = false;
}


stopBtn.onclick = function(){
    if(clickGameBtn){
        stopTheGame();
        playSound();
        setTimeout(()=>{
            submitH2(`Oh Lucky! ${winItem.id}`);
        },1400);
        clickGameBtn = false;
    }else{
        startTheGame();
        submitH2("What's next?");
        gameImageContainer.removeChild(winItem);
        clickGameBtn = true;
    }
}



function startTheGame(){
    stopBtn.innerHTML = "Stop";
/* start the game */
    loopGameAnimation = setInterval(function(){

/* add the one of the items to #container from items Array */
/* and float up to that item */
        gameImageContainer.appendChild(gameItems[itemLoop]);

/* remove that item from #container after animation */
        window.setTimeout(()=> {
            gameImageContainer.removeChild(gameItems[itemLoop]);
            itemLoop++;
            if(itemLoop>9){
                itemLoop = 0;
            }
        } , 300);

    }, 500);
}

function stopTheGame(){
    stopBtn.innerHTML = "Again";
    /* stop the game */
    clearInterval(loopGameAnimation);
    /* create new element in container */
    submitWinItems();
}

function playSound(){
    var bellSound = new Audio("sound/media.mp3");
    setTimeout(()=>{
        bellSound.play();
    },1200);
}

function submitH2(str){
    document.querySelector('h2').innerHTML = str;
}

function submitWinItems(){
    winItem = document.createElement('img');
    winItem.src = gameItems[itemLoop].getAttribute('src');
    winItem.id = gameItems[itemLoop].getAttribute('id');
    gameImageContainer.appendChild(winItem);
    winItem.style.animationName = "stop";
    winItem.style.animationDuration = "1s";
    setTimeout(()=>{
        winItem.style.opacity = 0;
    },1000);
    setTimeout(()=>{
        winItem.style.opacity = 1;
/* #container == 120px;
#container img == 100px;
if(top = 10px){
    image will place in the middle of Y axis in the container;
} */
        winItem.style.top = "20px";
    },1200);
}






























