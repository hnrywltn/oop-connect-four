import { Game } from './game.js';
//import { Column } from './column.js';




let game;

function updateUI() {
  let boardHolder = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");
  let clickTargets = document.getElementById("click-targets");

  for(let c = 0; c <= 6; c++) {
    let full = game.isColumnFull(c);
    let cId = `column-${c}`;
    let column = document.getElementById(cId);
    full ? column.classList.add("full") : column.classList.remove("full");
  }

  for(let r = 0; r <= 5; r++) {
    for(let c = 0; c <= 6; c++) {
      let square= document.getElementById(`square-${r}-${c}`);
      let cPlayer = game.getTokenAt(r, c);
      let tok = document.createElement("div");
      square.innerHTML = "";
      let color = cPlayer === 1 ? "black" : cPlayer === 2 ? "red": "";
      tok.setAttribute("class", color);
      tok.classList.add("token");
      square.appendChild(tok);
    }
  }


  if(!game) {
    boardHolder.classList.add("is-invisible");
  }
  if(game) {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }
  if(game.currentPlayer === 1) {
    clickTargets.classList.remove("red");
    clickTargets.classList.add("black");
  } else {
    clickTargets.classList.remove("black");
    clickTargets.classList.add("red");
  }
};




window.addEventListener("DOMContentLoaded", () => {
  let newGameBttn = document.getElementById("new-game");
  let playerInput1 = document.getElementById("player-1-name");
  let playerInput2 = document.getElementById("player-2-name");

  let clickTargets = document.getElementById("click-targets");






  clickTargets.addEventListener("click", (event) => {
    let targetID = event.target.id;
    if(!targetID.startsWith("column-")) return;
    let colNum = Number.parseInt(targetID[targetID.length - 1]);


    game.playInColumn(colNum);
    updateUI();

  });






//problem with only activating when input2 is keyed
  playerInput2.addEventListener("keyup", () => {
    if(playerInput1.value && playerInput2.value) {
      newGameBttn.disabled = false;
    } else {
      newGameBttn.disabled = true;
    }
  });



  newGameBttn.addEventListener("click", (event) => {
    game = new Game(playerInput1.value, playerInput2.value);
    playerInput1.value = "";
    playerInput2.value = "";
    newGameBttn.disabled = true;
    updateUI();
  });


  });















// if a coll has 6 inputs add the class "full" to coll

//indicate who's turn it is and when they hover over the coll div
  //it should turn that color
    //do this by adding the respective classes "black" and "red"
      //to the coll div contanier #click-targets

//when placing a token
  //create a div with the respective color and token classes
    //make that div a child el to the spuare #square-x-x(row-coll)





    /*START A NEW GAME*********************************************/
