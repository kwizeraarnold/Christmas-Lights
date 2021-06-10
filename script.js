let on = document.querySelector('#on')
let off = document.querySelector('#off')
let speedInput = document.querySelector("#sInput")
let speedButton = document.querySelector("#sButton")
let list = document.querySelectorAll("li")
let changeColorBtn = document.querySelector("#changeColors")
let arr = ['one-off', 'two-off', 'three-off', 'four-off', 'five-off', 'six-off', 'seven-off']
let arr1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

function removeColor(){
    for (let i = 0; i < list.length; i++) {
        list[i].removeAttribute("class")
    }
}

function addNewColor(){
    let cOne = document.querySelector("#colorOne").value
    let cTwo = document.querySelector("#colorTwo").value
    let cThree = document.querySelector("#colorThree").value
    let cFour = document.querySelector("#colorFour").value
    let cFive = document.querySelector("#colorFive").value
    let cSix = document.querySelector("#colorSix").value
    let cSeven = document.querySelector("#colorSeven").value
    let arr2 = [cOne, cTwo, cThree, cFour, cFive, cSix, cSeven]
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add(arr2[i])
    }
}

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
changeColorBtn.addEventListener('click', removeColor)
changeColorBtn.addEventListener('click', addNewColor)


