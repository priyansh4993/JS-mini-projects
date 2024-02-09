const text = document.querySelector(".second-text");

const textload = () =>{
    setTimeout(()=>{
        text.textContent = "freelencer"
    },0);
    setTimeout(()=>{
        text.textContent = "coder"
    },4000);
    setTimeout(()=>{
        text.textContent = "developer"
    },8000);
}

textload();
setInterval(textload,12000);