const image = document.querySelector(".container"),
heart = document.querySelector(".heart");


image.addEventListener("dblclick", (e)=>{

    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;


    heart.style.left = `${xValue}px`
    heart.style.top = `${yValue}px`


   heart.classList.add("active");
   setTimeout(()=>{
    heart.classList.remove("active")
},1000); 


});


