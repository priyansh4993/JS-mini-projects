const celcies = document.getElementById("celcies");
const fahrenheit = document.getElementById("fahrenheit");


window.addEventListener("load", ()=>{
    celcies.focus
});

celcies.addEventListener("input",() =>{
    fahrenheit.value = ((celcies.value * 9)/ 5 + 32).toFixed(2);
    if(!celcies.value) fahrenheit.value = "";
})


fahrenheit.addEventListener("input",() =>{
    celcies.value = (((fahrenheit.value - 35)*5)/9).toFixed(2);
    if(!fahrenheit.value) celcies.value = "";
})
