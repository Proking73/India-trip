
const infoTC = document.querySelector(".info-india");
const slideC = document.querySelector(".slideRL");
var check = "in";

slideC.addEventListener('click', () => {
if (check === "in") {
  slideC.style.transform = "rotate(180deg)";
  slideC.style.right = "30%";
  infoTC.style.width = "30%";
  infoTC.style.padding = "3%";
  check = "out"
  console.log("out")
} else if (check === "out") {
  console.log("in")
  slideC.style.transform = "rotate(0deg)";
  slideC.style.right = "0";
  check = "in"
  infoTC.style.width = "0";
  infoTC.style.padding = "0";  
}    
});
