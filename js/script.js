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