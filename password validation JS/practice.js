const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");

const requirementsList = document.querySelectorAll(".requirement-list li");

const requirements = [
    {regex: /.{8,}/, index:0},
    {regex: /[0-9]/, index:1},
    {regex: /[a-z]/, index:2},
    {regex: /[^A-Za-z0-9]/, index:3},
    {regex: /[A-Z]/, index:4},
]

passwordInput.addEventListener("keyup",(e)=>{
    requirements.forEach(item =>{
        const isValid = item.regex.test(e.target.value);
        const requirementsItem = requirementsList[item.index];

        if(isValid){
            requirementsItem.firstElementChild.className = "fa-solid fa-check";
            requirementsItem.classList.add("valid");
        }else{
            requirementsItem.firstElementChild.className = "fa-solid fa-circle";
            requirementsItem.classList.remove("valid");

        }
    })
})




eyeIcon.addEventListener("click", ()=>{
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";

        eyeIcon.className = `fa solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;

})