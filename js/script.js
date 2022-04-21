const animation = document.getElementsByClassName("anim-box-front")
for (let i = 0; i < animation.length; i++){
    animation[i].addEventListener("mouseover", boxAnim)
function boxAnim() {
    let anim = document.getElementsByClassName("anim-box-bg")
    anim[i].style.display = "flex"
    }
}
const animationStop = document.getElementsByClassName("anim-box-front")
for (let i = 0; i < animationStop.length; i++){
    animationStop[i].addEventListener("mouseout", boxAnim)
function boxAnim() {
    let anim = document.getElementsByClassName("anim-box-bg")
    anim[i].style.display = "none"
    }
}
const gradient = document.getElementsByClassName("gradient-box")
for (let i = 0; i < gradient.length; i++) {
    gradient[i].addEventListener("mouseover", GradientToggle)
    function GradientToggle(){
        let grad = document.getElementsByClassName("gradient")
        grad[i].style.display = "flex"
    }
}
const gradientOff = document.getElementsByClassName("gradient-box")
for (let i = 0; i < gradientOff.length; i++) {
    gradientOff[i].addEventListener("mouseout", GradientToggle)
    function GradientToggle(){
        let grad = document.getElementsByClassName("gradient")
        grad[i].style.display = "none"
    }
}
const hamb = document.getElementsByClassName("nav-el-left")
const hamb1 = document.getElementsByClassName("nav-el-right")
const closeHamb1 = document.getElementById("close1")
const closeHamb2 = document.getElementById("close2")
const closeHamb3 = document.getElementById("close3")
function displayNav() {
    hamb[0].classList.toggle("display-nav")
    hamb1[0].classList.toggle("display-nav")
    closeHamb1.classList.toggle("close1")
    closeHamb2.classList.toggle("close2")
    closeHamb3.classList.toggle("close3")
}
const hambHide = document.getElementsByClassName("nav-el-left")
const hambHide1 = document.getElementsByClassName("nav-el-right")
function hideNav() {
    hambHide[0].classList.remove("display-nav")
    hambHide1[0].classList.remove("display-nav")
    closeHamb1.classList.remove("close1")
    closeHamb2.classList.remove("close2")
    closeHamb3.classList.remove("close3")
}
