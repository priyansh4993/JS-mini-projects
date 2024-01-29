let tostbox = document.getElementById("tostbox")
let successmsg  = ' <i class="fa-solid fa-circle-check"></i> successfully submmited'
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> please fix the error!'
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i>invalid input, check again'
function showtost(msg){
    let tost = document.createElement("div")
    tost.classList.add("tost")
    tost.innerHTML = msg;
    tostbox.appendChild(tost);

    if(msg.includes('error')){
        tost.classList.add('error')
    }
    if(msg.includes('invalid')){
        tost.classList.add('invalid');
    }
    setTimeout(()=>{
        tost.remove()
    },5000);

}