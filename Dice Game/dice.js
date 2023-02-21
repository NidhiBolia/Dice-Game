// player 1
var randomnumber;
randomnumber=Math.floor((Math.random()*6)) + 1;
var randomDiceImageSource="images/dice" + randomnumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImageSource);


// player 2
var randomnumber2=Math.floor((Math.random()*6)) + 1;
var randomDiceImageSource2="images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);

// wins
if(randomnumber>randomnumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomnumber2>randomnumber)
{
    document.querySelector("h1").innerHTML=" Player 2 Wins!🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}