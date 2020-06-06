const main = document.querySelector(".maincontentplease");
const loader = document.querySelector(".loader");
const load = document.querySelector(".spinner-grow");

function init() {
  setTimeout(() => {
    load.style.opacity = 0;
    load.style.display = "none";

    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 10000);
}

init();
