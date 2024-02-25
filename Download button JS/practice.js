const downloadbtn = document.querySelector(".download-btn");


const filelink = "https://drive.google.com/file/d/1IerK4ZGvYt8bKBRVQsXMmM1JJBpnzXtc/view?usp=drive_link"

const initTimer = ()=>{
    let timer = downloadbtn.dataset.timer;
    downloadbtn.classList.add("timer");
    downloadbtn.innerHTML = `Your file will downloading <b>${timer}</b> seconds`;


    const initCounter = setInterval(()=>{
        if(timer > 0){
            timer--;
            return  downloadbtn.innerHTML = `Your file will downloading <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = filelink;
        downloadbtn.textContent = "your file is downloading..."
        
        setTimeout(()=>{
            downloadbtn.classList.replace("timer","disable-timer");
            downloadbtn.innerHTML = `<span class="icon"><i class="fa-solid fa-download"></i></span>
            <span class="text">Download Again</span>`
        },3000)


    },1000);

}

downloadbtn.addEventListener("click",initTimer)