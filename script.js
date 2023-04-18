let navBarEl = document.getElementById("navBar");

let menuEl = document.getElementById("menu");

menuEl.addEventListener("click", toggle);

function toggle(){
  navBarEl.classList.toggle("hidden");
}

let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", theme);

function theme(){
  document.body.classList.toggle("dark-theme");
}

