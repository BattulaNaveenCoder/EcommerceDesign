/***
 * navbar toggle
 */

const overlay =document.querySelector("[data-overlay]");
const navoptbtn =document.querySelector("[data-nav-open-btn]");
const navbar =document.querySelector("[data-navbar]");
const navclose =document.querySelector("[data-nav-close-btn]")


const navele =[overlay,navoptbtn,navclose]

for(let i=0;i<navele.length;i++){
    navele[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}
