const stars = document.querySelectorAll(".stars i");


stars.forEach((star, index1)=>{
    star.addEventListener("click", () =>{

        stars.forEach((stars , index2)=>{

            index1 >= index2 ? stars.classList.add("active") : stars.classList.remove("active")
        })
    })
})