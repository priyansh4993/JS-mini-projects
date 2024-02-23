let inputbox = document.querySelector(".input-box");
let search = document.querySelector(".search");
let closeicon = document.querySelector(".close-icon");

search.addEventListener("click",()=> inputbox.classList.add("open"));
closeicon.addEventListener("click",()=> inputbox.classList.remove("open"));