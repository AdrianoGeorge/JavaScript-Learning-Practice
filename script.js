const bulbImage = document.getElementById("myImage");
// //  ?! bulbon
// const toggleButton = document.getElementById("toggleButton");
// toggleButton.addEventListener("click", () => {
//   if (bulbImage.src.match("bulbon")) {
//     bulbImage.src = "pic_bulbon.gif";
//   } else {
//     bulbImage.src = "pic_bulboff.gif";
//   }
// });

// const buttonOn = () => {
//   bulbImage.src = "pic_bulbon.gif";
// };
// const buttonOff = () => {
//   bulbImage.src = "pic_bulboff.gif";
// };

//ADD EVENT LISTENER TO THE BUTTONS
const buttonOn = document.getElementById("buttonOn");
buttonOn.addEventListener("click", () => {
  bulbImage.src = "pic_bulbon.gif";
});

const buttonOff = document.getElementById("buttonOff");
buttonOff.addEventListener("click", () => {
  bulbImage.src = "pic_bulboff.gif";
});
