const image = document.querySelector(".container"),
heart = document.querySelector(".heart");


image.addEventListener("dblclick", (e)=>{

    console.log(e);

   heart.classList.add("active");
})

setTimeout(()=>{
    heart.classList.remove("active")
},1000); 

