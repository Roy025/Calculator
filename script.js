let res = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    // console.log("clicked");
    // console.log(e);
    // console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "C":
        res.innerText = "";
        break;
      case "=":
        try {
          res.innerText = eval(res.innerText);
        } catch {
          res.innerText = "ERROR";
        }
        break;
      default:
        res.innerText += e.target.innerText;
    }
  });
});
