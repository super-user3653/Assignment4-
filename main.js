const main = document.querySelector(".maincontentplease");
const loader = document.querySelector(".loader");
const load = document.querySelector(".spinner-grow");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 5000);
}

init();
