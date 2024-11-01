let boxes = document.querySelectorAll(".box");

let symbol = true;

let winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var count = 0;
boxes.forEach((box) => {
  box.onclick = () => {
    count++;
    console.log(count);
    document.querySelector(".reset").style.display = "block";
    if (symbol) {
      box.innerHTML = "X";
      symbol = false;
    } else {
      box.innerHTML = "O";
      box.classList.add("color");
      symbol = true;
    }
    box.disabled = true;
    checkwinner();
  };
});

function showresult(val1) {
  document.querySelector(".after").style.display = "block";
  document.querySelector(".afterbutton").style.display = "block";
  document.querySelector(".reset").style.display = "none";
  document.querySelector(".after").innerHTML = `Winner is ${val1}`;

  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function checkwinner() {
  if (count == 9) {
    for(let i of winpatterns) {
      
      let val1 = boxes[i[0]].innerHTML;
      let val2 = boxes[i[1]].innerHTML;
      let val3 = boxes[i[2]].innerHTML;

      if (val1 != "" && val2 != "" && val3 != "") {
        if (val1 === val2 && val2 === val3) {
          showresult(val1);
        } else {
          document.querySelector(".after").style.display = "block";
          document.querySelector(".after").innerHTML = `Match drawn`;
          document.querySelector(".afterbutton").style.display = "block";
          document.querySelector(".reset").style.display = "none";
        }
      }
    }
  }

  for (let i of winpatterns) {
    
    let val1 = boxes[i[0]].innerHTML;
    let val2 = boxes[i[1]].innerHTML;
    let val3 = boxes[i[2]].innerHTML;
    
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showresult(val1);
      }
    }
  }
}

document.querySelector(".reset").onclick = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    count = 0;
  });
};

document.querySelector(".newgame").onclick = () => {
  document.querySelector(".after").style.display = "none";
  document.querySelector(".afterbutton").style.display = "none";

  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
    count = 0;
  });
};