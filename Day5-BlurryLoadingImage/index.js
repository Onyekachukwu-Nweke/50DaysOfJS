const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

//blur counter
let load = 0

//blur timer
let int = setInterval(blurring, 30)

//Function that blurs the image
function blurring(){
    load++

    //stops timer when it hits 100
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

//javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin) / (inMax - inMin)) + outMin;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers