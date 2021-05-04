{
  const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", changeBackground);
    welcome();

  }

    const welcome = () => {
    console.log("Witaj programisto. Co tak podglądasz? :D");
  }

  const changeBackground = () => {
    const container = document.querySelector(".container");
    const theName = document.querySelector(".js-theName");

    container.classList.toggle("body--white");

    if (container.classList.contains("body--white")) {
      theName.innerText = "ciemny";
    } else {
      theName.innerText = "jasny";
    }

  }
  init();
}


