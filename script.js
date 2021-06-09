let on = document.querySelector('#on')
let off = document.querySelector('#off')
let speedInput = document.querySelector("#sInput")
let speedButton = document.querySelector("#sButton")
let arr = ['one-off', 'two-off', 'three-off', 'four-off', 'five-off', 'six-off', 'seven-off']
let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
let list = document.querySelectorAll("li")

console.log(speedInput)

function changeSpeed() {
    let input = speedInput.value + 's'
    for (let i = 0; i < list.length; i++) {
        list[i].style["animationDuration"] = input
    }
}

function turnLightsOff(){
    for (let i = 0; i < list.length; i++) {
        list[i].classList.replace(arr1[i], arr[i])
    }
}

function turnLightsOn(){
    for (let i = 0; i < list.length; i++) {
        list[i].classList.replace(arr[i], arr1[i])
    }
}

off.addEventListener('click', turnLightsOff)
on.addEventListener('click', turnLightsOn)
speedButton.addEventListener('click', changeSpeed)


