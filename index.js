// const question_btn = document.getElementsByClassName("question");
// const arrow = document.querySelectorAll(".arrow");
// const title = document.querySelectorAll(".question");
// const texto = document.getElementsByClassName("answer");
// let howMany = 0;

// for (let i = 0; i < question_btn.length; i++) {

//   question_btn[i].addEventListener("click", () => {
//     closeAll();
//     openQuest(i);
//   });
// }


// function openQuest(i) {
//   arrow[i].style.transform = "rotateX(180deg)";
//   title[i].style.fontWeight = "700";
//   texto[i].style.maxHeight = "10em";
//   texto[i].style.opacity = "1";
// }

// function closeAll() {
//   for (let i = 0; i < question_btn.length; i++) {
//     arrow[i].style.transform = "rotateX(0deg)";
//     title[i].style.fontWeight = "500";
//     texto[i].style.maxHeight = "0px";
//     texto[i].style.opacity = "0";
//   }
// }


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
