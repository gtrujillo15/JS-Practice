const carp = document.getElementById("carpic");
const cart = document.getElementById("cartext");
const catp = document.getElementById("catpic");
const catt = document.getElementById("cattext");
const doorp = document.getElementById("doorpic");
const doort = document.getElementById("doortext");

carp.addEventListener("click", pairone);
cart.addEventListener("click", pairone);

//toggle back and forth
function parione (el){
  this.classList.toggle("pairone");
  if(el.className === "this"){
    el.className = "pairone";
  } else {
    el.className = "this";
  }
}