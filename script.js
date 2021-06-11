let on = document.querySelector('#on')
let off = document.querySelector('#off')
let speedInput = document.querySelector("#sInput")
let speedButton = document.querySelector("#sButton")
let changeColorBtn = document.querySelector("#changeColors")
let addRowsBtn = document.querySelector("#addRows")


function addMoreRows(){
    let rowsInput = document.querySelector('#rowIpt').value
    for (let i = 0; i < rowsInput; i++) {
         let lights = document.querySelector('#divOne')
        let p = document.querySelector('#divTwo')
        let p_clone = p.cloneNode(true)
        lights.appendChild(p_clone)
    }
   

}

function removeColor(){
    let list = document.querySelectorAll("li")
    for (let i = 0; i < list.length; i++) {
        list[i].removeAttribute("class")
    }
}

function addNewColor(){
    let list = document.querySelectorAll("li")
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
    let list = document.querySelectorAll("li")
    let input = speedInput.value + 's'
    for (let i = 0; i < list.length; i++) {
        list[i].style["animationDuration"] = input
    }
}

function turnLightsOff(){
    let list = document.querySelectorAll("li")
    for (let i = 0; i < list.length; i++) {
        switch (list[i].className) {
            case 'one':
                list[i].classList.replace('one', 'one-off')
                break;
            case 'two':
                list[i].classList.replace('two', 'two-off')
                break;
            case 'three':
                list[i].classList.replace('three', 'three-off')
                break;
            case 'four':
                list[i].classList.replace('four', 'four-off')
                break;
            case 'five':
                list[i].classList.replace('five', 'five-off')
                break; 
            case 'six':
                list[i].classList.replace('six', 'six-off')
                break;
            case 'seven':
                list[i].classList.replace('seven', 'seven-off')
                break;
        }
    }
}

function turnLightsOn(){
    let list = document.querySelectorAll("li")
    for (let i = 0; i < list.length; i++) {
        switch (list[i].className) {
            case 'one-off':
                list[i].classList.replace('one-off', 'one')
                break;
            case 'two-off':
                list[i].classList.replace('two-off', 'two')
                break;
            case 'three-off':
                list[i].classList.replace('three-off', 'three')
                break;
            case 'four-off':
                list[i].classList.replace('four-off', 'four')
                break;
            case 'five-off':
                list[i].classList.replace('five-off', 'five')
                break; 
            case 'six-off':
                list[i].classList.replace('six-off', 'six')
                break;
            case 'seven-off':
                list[i].classList.replace('seven-off', 'seven')
                break;
        }
    }
}

off.addEventListener('click', turnLightsOff)
on.addEventListener('click', turnLightsOn)
speedButton.addEventListener('click', changeSpeed)
changeColorBtn.addEventListener('click', removeColor)
changeColorBtn.addEventListener('click', addNewColor)
addRowsBtn.addEventListener('click', addMoreRows)


