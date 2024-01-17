let y = Math.floor(Math.random() * (101));
let guess=0;
var array=[];
let score=20;
const msg=document.querySelector(".message");
const s=document.querySelector(".score");
const hs=document.querySelector(".highscore");
const hm=document.querySelector(".hide_num");
const c=document.querySelector(".container");
const h=document.querySelector(".para");
 let highScore = localStorage.getItem('highScore');
 hs.textContent = highScore;
if (!highScore) {
  // If no high score is set in localStorage, set it to 0
  hs.textContent = 0;
  highScore=0;
}
function function2(event)
{
  event.preventDefault();
    let num=document.getElementById("number").value;
    array.push(num);
    let res="";
   if(guess>5)
   {
    alert("chances are done");
    location.reload();
   }
   if(num=='')
  alert('enter the number')
  else
  {
    if (num == y) {

        res="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS :) " ;
            if (score >highScore || highScore === 0) {
              highScore = score;
              // Store the updated high score in localStorage
              localStorage.setItem('highScore', highScore);
              hs.textContent = highScore;
            }
          h.textContent="The Number is";
          msg.textContent=res ;
          msg.style.backgroundColor='green';
          c.style.backgroundColor='#green';
          hm.textContent=num;
          hm.style.width="50%";
          hm.style.transition='all 0.5s ease-in';


    }
    else if (num > y) {
        guess++;
        score--;
        s.textContent=score;
        res="OOPS SORRY!! TRY A SMALLER NUMBER";
        msg.textContent =res ;
        msg.style.backgroundColor='red';
    }
    else {
        guess++;
        score--;
        s.textContent=score;
        res="OOPS SORRY!! TRY A GREATER NUMBER";
        msg.textContent =res ;
        msg.style.backgroundColor='red';
    
    }
  }
    document.getElementById("guess").innerHTML =array;
    return false;
}
function hint(event)
{
    var strTarget = y.toString();
    var hintNum = '';
    if(strTarget.length == 1){
      hintNum = 'single digits.';
    } else if(strTarget.length == 2){
      hintNum = y.toString()[0] + '0s.';
    } else if(strTarget.length == 3){
      hintNum = y.toString()[0] + '00s.';
    }
    alert("Here's a hint...the number is somehwere in the " + hintNum);
  }

function restart()
{
    // document.getElementById("guess").style.display = 'none';
    // document.getElementById("demo1").style.display = 'none';
    array=[];
    guess=0;
    location.reload();
}