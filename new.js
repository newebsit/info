
// to change the images randomly with methods Math.random() and to get particular value i.e;without decimal we use Math.floor() method...
var randomNbr=Math.floor(Math.random() *6) +1;//1-6 (actually random nbrs start from 0 . to avoid that we added 1 -- such that from now it will count from 1 to 6)


// to select a random dice image --- we can use concatenation to select random images by changing the source of image.
var randomDice="dice" + randomNbr + ".png";//dice1.png - dice6.png--

// we should include the path  of the image ... and the name of the image is replaced by already defined variable i.e:: randomDice...
var randomImg ="images/" + randomDice; // what  do we get -- images/dice1.png  through to  images/dice6.png

// CHANGING THE ATTRIBUTES OF ELEMENTS ::
//    1st --  we have to select the element --i.e using -- document.querySelectorAll (becoz we have change two images) - and inside we have to select the tag.

//  to tap into the first one we have to specify the index[0]
var image1=document.querySelectorAll("img")[0];

// setting the attribute by a metho -- setAttribute
image1.setAttribute("src",randomImg);

// for player 2 image.

var randomNbr2= Math.floor(Math.random()*6)+1;
// var randomDice2 = "dice" + randomNbr + ".png";
var randomImgSource = "images/dice"+ randomNbr2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImgSource);


// to change the title which ever the dice is highest to decide the winner.
// by using if statement


if (randomNbr > randomNbr2){
  document.querySelector("h1").innerHTML = "Player 1 Wins" ;
}
else if(randomNbr2 > randomNbr){
  document.querySelector("h1").innerHTML = "Player 2 Wins" ;
}
else {
  document.querySelector("h1").innerHTML = "Draw";
}
