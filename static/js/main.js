let secret = Math.floor(Math.random()*99)+1;
let score = 50;
let highscore = 0;

let message = document.querySelector(".message");
let overlay = document.querySelector(".overlay");
let lscore = document.querySelector(".score");
let lhighscore = document.querySelector(".highscore");
let test = document.querySelector(".test");
let number = document.querySelector(".secret");

document.querySelector(".restart").addEventListener("click",function(){
    score = 50;
    message.textContent = "Waiting for your guess!";
    secret = Math.floor(Math.random()*99)+1;
    number.textContent = "?";
    document.querySelector(".main").style.backgroundColor = "aliceblue";
})

document.querySelector(".check").addEventListener("click",function(){
    let guess = Number(document.querySelector("#guess").value);
    if(guess>secret){
        message.textContent = "Your guess is Higher!";
        if (score >0){
            score--;
            lscore.textContent = score;
        }
    }
    else if(guess<secret){
        message.textContent = "Your guess is lower!";
        if (score >0){
            score--;
            lscore.textContent = score;
        }
    }
    else{
        message.textContent = "Your guessed it!";
        if (score > highscore){
            highscore = score;
            lhighscore.textContent = highscore;
            number.textContent = secret;
            document.querySelector(".main").style.backgroundColor = "green";
        }
    }
    if (score <= 0){
        document.querySelector(".main").style.backgroundColor = "red";
    }
})

document.querySelector(".about").addEventListener("click",function(){
    if (test.classList.contains("hidden")){
        overlay.classList.remove("hidden");
        test.classList.remove("hidden");
    }else{
        overlay.classList.add("hidden");
        test.classList.add("hidden");
    }
})

document.querySelector(".close").addEventListener("click",function(){
    overlay.classList.add("hidden");
    test.classList.add("hidden");
})