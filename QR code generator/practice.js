let imgbox = document.getElementById("imgbox")
let qrimg = document.getElementById("qrimg")
let qrtext = document.getElementById("qrtext")



function generateQR(){
    if(qrtext.value.length >0){
  qrimg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example "
  + qrtext.value;
  imgbox.classList.add("show-img");
}else{
    qrtext.classList.add("error");
    setTimeout (()=>{
        qrtext.classList.remove("error");
    },1000);
}
}