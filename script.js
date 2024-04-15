'use strict';
const supnumber= Math.trunc(Math.random()*20) + 1;
let count=Number(document.querySelector('.score').textContent);
document.querySelector('.number').textContent=supnumber;
while(count!=0){
    document.querySelector('.check').addEventListener('click', function(){
        const guess=Number(document.querySelector('.guess').value);
        if(!guess){
            alert("put a number");
            document.querySelector('.message').textContent="not a number";
        }
        else if(guess>Number(supnumber)){
            count=count-1;
            document.querySelector('.score').textContent=count;
            document.querySelector('.message').textContent="lower than that";
        }
        else if(guess<Number(supnumber)){
            count=count-1;
            document.querySelector('.score').textContent=count;
            document.querySelector('.message').textContent="higher than that";
        }
        else{
            document.querySelector('.message').textContent="correct";
            document.querySelector('.highscore').textContent=count;
        }
    });
}