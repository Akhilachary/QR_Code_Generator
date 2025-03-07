let user_input = document.getElementById("user_input");
let btn = document.getElementById("btn");
let image = document.getElementsByClassName("image");
let download_btn=document.getElementById("download_btn");
let link=document.querySelector("a")

btn.addEventListener("click",()=>{
   image[0].src=`https://image-charts.com/chart?
chs=150x150&cht=qr&chl=${user_input.value}`
image[0].classList.add("image1")

})

download_btn.addEventListener("click",()=>{
    link.href=image[0].src;
    link.download="qr-code.png";
    link.click();
})