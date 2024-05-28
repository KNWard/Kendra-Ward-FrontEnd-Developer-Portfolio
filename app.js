// ON SCROLL FUNCTION FOR NAVIGATION BAR
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   document.getElementById("nav").style.top = "0";
   document.getElementById("nav").style.backgroundColor = "rgb(2, 48, 71, 0.8)";
  } else {
   document.getElementById("nav").style.top = "-50px";
   document.getElementById("nav").style.backgroundColor = "transparent"
  }
}


// MODALS
const modalOne = document.getElementById("myModalOne");
const modalTwo = document.getElementById("myModalTwo")
const modalThree = document.getElementById("myModalThree")
const modalFour = document.getElementById("myModalFour")

const btnOne = document.getElementById("project-link-one");
const btnTwo = document.getElementById("project-link-two");
const btnThree = document.getElementById("project-link-three");
const btnFour = document.getElementById("project-link-four");
const span = document.getElementsByClassName("close")[0];

// OPEN BUTTONS
btnOne.onclick = function () {
 modalOne.style.display = "block";
}

btnTwo.onclick = function () {
 modalTwo.style.display = "block";
}

btnThree.onclick = function () {
 modalThree.style.display = "block";
}

btnFour.onclick = function () {
 modalFour.style.display = "block";
}

// CLOSE MODALS WHEN WINDOW CLICKED
window.onclick = function (event) {
 if (event.target == modalOne) {
  modalOne.style.display = "none";
 }
 if (event.target == modalTwo) {
  modalTwo.style.display = "none";
 }
 if (event.target == modalThree) {
  modalThree.style.display = "none";
 }
 if (event.target == modalFour) {
  modalFour.style.display = "none";
 }
}


