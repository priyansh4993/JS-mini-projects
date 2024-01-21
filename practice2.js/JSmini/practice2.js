window.addEventListener("mousemove", function(details){
    let rect = document.querySelector("#rect")
    let xvalue = gsap.utils.mapRange(0, this.window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,
         this.window.innerWidth-(100 + rect.getBoundingClientRect().width/2),
 
         details.clientX)
    gsap.to("#rect",{
        left: xvalue + "px",
        ease: Power3

    })
})