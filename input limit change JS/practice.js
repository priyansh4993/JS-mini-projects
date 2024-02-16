const input = document.querySelector("form input");
const counter = document.querySelector("form .counter");
const maxlength = input.getAttribute("maxlength");


input.onkeyup = ()=>{
    counter.innerText = maxlength - input.value.length;
}