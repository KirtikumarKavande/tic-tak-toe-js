console.log("script loaded");

document.addEventListener("DOMContentLoaded", () => {
  let toggleState = "X";
  const table = document.getElementById("ticTacToeBoard");
  table.addEventListener("click", (e) => {
    if (toggleState === "O") {
      if (e.target.getAttribute("isModified")) {
        return;
      }
      e.target.textContent = "X";
      e.target.setAttribute("isModified", true);
      toggleState = "X";
    } else {
        if (e.target.getAttribute("isModified")) {
            return;
          }
      e.target.textContent = "O";
      toggleState = "O";
      e.target.setAttribute("isModified", true);

    }
  });
});
