let icons = document.getElementById("icon");

icons.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icons.src = "dark theme icon/sun.png";
    }else{
        icons.src = "dark theme icon/moon.png";
    }
}   