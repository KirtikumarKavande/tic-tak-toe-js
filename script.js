console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {

  let filledArray = Array(9).fill(undefined);
const winnerName=document.getElementById('winnerName') 
  let toggleState = "X";
  const table = document.getElementById("ticTacToeBoard");
  const relaod = document.getElementById("relaod");
  table.addEventListener("click", (e) => {

    if (toggleState === "O") {
      if (e.target.getAttribute("isModified")) {
        return;
      }
      e.target.textContent = "X";
      e.target.setAttribute("isModified", true);
      const index = e.target.getAttribute("cellNumber");
      filledArray[+index] = "X";
      toggleState = "X";
      console.log(filledArray);
    } else {
      if (e.target.getAttribute("isModified")) {
        return;
      }
      e.target.textContent = "O";
      toggleState = "O";
      const index = e.target.getAttribute("cellNumber");
      filledArray[+index] = "O";
      console.log(filledArray);
      e.target.setAttribute("isModified", true);
    }



    if (
        filledArray[0] === filledArray[1] &&
        filledArray[0] === filledArray[2] &&
        filledArray[1] === filledArray[2]
      ) {
       let gameWinner=filledArray[0]
       winnerName.textContent=gameWinner
      } else if(
        filledArray[3] === filledArray[4] &&
        filledArray[4] === filledArray[5] &&
        filledArray[3] === filledArray[5]
      ){
       gameWinner=filledArray[3]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[6] === filledArray[7] &&
        filledArray[7] === filledArray[8] &&
        filledArray[6] === filledArray[8]
      ){
       gameWinner=filledArray[6]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[0] === filledArray[3] &&
        filledArray[3] === filledArray[6] &&
        filledArray[0] === filledArray[6]
      ){
       gameWinner=filledArray[0]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[1] === filledArray[4] &&
        filledArray[4] === filledArray[7] &&
        filledArray[1] === filledArray[7]
      ){
       gameWinner=filledArray[1]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[2] === filledArray[5] &&
        filledArray[5] === filledArray[8] &&
        filledArray[2] === filledArray[8]
      ){
       gameWinner=filledArray[2]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[0] === filledArray[4] &&
        filledArray[4] === filledArray[8] &&
        filledArray[0] === filledArray[8]
      ){
       gameWinner=filledArray[6]
       winnerName.textContent=gameWinner

      }else if(
        filledArray[2] === filledArray[4] &&
        filledArray[4] === filledArray[6] &&
        filledArray[2] === filledArray[6]
      ){
       gameWinner=filledArray[2]
       winnerName.textContent=gameWinner

      }
  });

  relaod.addEventListener('click',()=>
  location.reload())

});
