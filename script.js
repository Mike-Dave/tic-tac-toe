"use strict";

const itemButton = document.querySelectorAll(".item");
console.log(itemButton);
const restart = document.querySelector(".restart");
const firstBox = document.querySelector(".first-box");
const secondBox = document.querySelector(".second-box");
const thirdBox = document.querySelector(".third-box");
const fourthBox = document.querySelector(".fourth-box");
const fifthBox = document.querySelector(".fifth-box");
const sixthBox = document.querySelector(".sixth-box");
const seventhBox = document.querySelector(".seventh-box");
const eighthBox = document.querySelector(".eighth-box");
const ninthBox = document.querySelector(".ninth-box");

let firstPlayer = "X";
let playing = true;
const gameWiningColor = "#617143";
const normalBackgroundColor = "#e1eedd";
itemButton.forEach(function (btn, i) {
  btn.addEventListener(
    "click",
    function () {
      if (playing) {
        // Setting the text content of selected element
        itemButton[i].textContent = firstPlayer;

        // Changing the from "X" to "O" and vice versa
        firstPlayer = firstPlayer === "X" ? "O" : "X";
      }
      // storing the boxes text contents in a variable and comparing them
      const firstHorizontalX =
        firstBox.textContent === "X" &&
        secondBox.textContent === "X" &&
        thirdBox.textContent === "X";
      const firstHorizontalO =
        firstBox.textContent === "O" &&
        secondBox.textContent === "O" &&
        thirdBox.textContent === "O";

      const secondHorizontalX =
        fourthBox.textContent === "X" &&
        fifthBox.textContent === "X" &&
        sixthBox.textContent === "X";

      const secondHorizontalO =
        fourthBox.textContent === "O" &&
        fifthBox.textContent === "O" &&
        sixthBox.textContent === "O";
      const thirdHorizontalX =
        seventhBox.textContent === "X" &&
        eighthBox.textContent === "X" &&
        ninthBox.textContent === "X";
      const thirdHorizontalO =
        seventhBox.textContent === "O" &&
        eighthBox.textContent === "O" &&
        ninthBox.textContent === "O";
      // Vertical
      const firstVerticalX =
        firstBox.textContent === "X" &&
        fourthBox.textContent === "X" &&
        seventhBox.textContent === "X";

      const firstVerticalO =
        firstBox.textContent === "O" &&
        fourthBox.textContent === "O" &&
        seventhBox.textContent === "O";

      const secondVerticalX =
        secondBox.textContent === "X" &&
        fifthBox.textContent === "X" &&
        eighthBox.textContent === "X";

      const secondVerticalO =
        secondBox.textContent === "O" &&
        fifthBox.textContent === "O" &&
        eighthBox.textContent === "O";
      const thirdVerticalX =
        thirdBox.textContent === "X" &&
        sixthBox.textContent === "X" &&
        ninthBox.textContent === "X";
      const thirdVerticalO =
        thirdBox.textContent === "O" &&
        sixthBox.textContent === "O" &&
        ninthBox.textContent === "O";

      // Diagonal
      const firstToNinthDiagonalX =
        firstBox.textContent === "X" &&
        fifthBox.textContent === "X" &&
        ninthBox.textContent === "X";

      const firstToNinthDiagonalO =
        firstBox.textContent === "O" &&
        fifthBox.textContent === "O" &&
        ninthBox.textContent === "O";
      const thirdToSeventhDiagonalX =
        thirdBox.textContent === "X" &&
        fifthBox.textContent === "X" &&
        seventhBox.textContent === "X";
      const thirdToSeventhDiagonalO =
        thirdBox.textContent === "O" &&
        fifthBox.textContent === "O" &&
        seventhBox.textContent === "O";

      //   Comparing the text contents of the boxes
      if (firstHorizontalX || firstHorizontalO) {
        firstBox.style.backgroundColor = gameWiningColor;
        secondBox.style.backgroundColor = gameWiningColor;
        thirdBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (secondHorizontalX || secondHorizontalO) {
        fourthBox.style.backgroundColor = gameWiningColor;
        fifthBox.style.backgroundColor = gameWiningColor;
        sixthBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (thirdHorizontalX || thirdHorizontalO) {
        seventhBox.style.backgroundColor = gameWiningColor;
        eighthBox.style.backgroundColor = gameWiningColor;
        ninthBox.style.backgroundColor = gameWiningColor;

        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (firstVerticalX || firstVerticalO) {
        firstBox.style.backgroundColor = gameWiningColor;
        fourthBox.style.backgroundColor = gameWiningColor;
        seventhBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (secondVerticalX || secondVerticalO) {
        secondBox.style.backgroundColor = gameWiningColor;
        fifthBox.style.backgroundColor = gameWiningColor;
        eighthBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (thirdVerticalX || thirdVerticalO) {
        thirdBox.style.backgroundColor = gameWiningColor;
        sixthBox.style.backgroundColor = gameWiningColor;
        ninthBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (firstToNinthDiagonalX || firstToNinthDiagonalO) {
        firstBox.style.backgroundColor = gameWiningColor;
        fifthBox.style.backgroundColor = gameWiningColor;
        ninthBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      } else if (thirdToSeventhDiagonalX || thirdToSeventhDiagonalO) {
        thirdBox.style.backgroundColor = gameWiningColor;
        fifthBox.style.backgroundColor = gameWiningColor;
        seventhBox.style.backgroundColor = gameWiningColor;
        // Stopping the next player from playing if the condition is true
        playing = false;
      }
    },
    { once: true }
  );
});
restart.addEventListener("click", function () {
  window.location.reload();
  playing = true;
});
