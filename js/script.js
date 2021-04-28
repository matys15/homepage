console.log("Witaj programisto. Co tak podglądasz? :D");
let button = document.querySelector(".button");
let container = document.querySelector(".container");
let theName = document.querySelector(".theName");


button.addEventListener("click", () => {
  container.classList.toggle("whitebackground");

if (container.classList.contains("whitebackground")) {
  theName.innerText = "ciemny";
} else {
  theName.innerText = "jasny";
}
});
