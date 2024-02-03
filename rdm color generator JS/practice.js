const getcolor = ()=>{
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    console.log(randomnumber, randomcode);
    document.body.style.backgroundColor = randomcode; 
    document.getElementById("color-code").innerText = randomcode;
}

document.getElementById("btn").addEventListener("click",getcolor);

getcolor();