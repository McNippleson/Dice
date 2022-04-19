let x;
let y;
let dice1;
let dice2;
function randomNumber1() {
    x = Math.floor(Math.random() * 6 + 1);
    y = Math.floor(Math.random() * 6 + 1);
    return x,y;
}
randomNumber1();
function assignDice1(x, y) {
    dice1 = "images/dice" + x + ".png";
    document.querySelector(".img1").setAttribute("src", dice1);
    dice2 = "images/dice" + y + ".png";
    document.querySelector(".img2").setAttribute("src", dice2);
}
assignDice1(x, y);
console.log(x,y);
console.log(dice1, dice2);

    
function changeTitle() {
    if (x > y) {
        document.querySelector("h1").innerHTML="Player 1 won!";
    } else if (x === y) {
        document.querySelector("h1").innerHTML="Draw!";
    } else {
        document.querySelector("h1").innerHTML="Player 2 won!";
    }
}
changeTitle();