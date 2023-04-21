let Count = 0
let currentElement = 0 
let Operation = "+"
let outputScreenElement = document.getElementById("outputScreen")
let inputScreenElement = document.getElementById("inputScreen") 
function action(num) {
    inputScreenElement.textContent += num
    currentElement = currentElement*(10)+num
    console.log(Count + " " + currentElement)
    displayOutput()
}
function action1() {
    action(1)
}
function action2() {
    action(2)
}
function action3() {
    action(3)
}
function action4() {
    action(4)
}
function action5() {
    action(5)
}
function action6() {
    action(6)
}
function action7() {
    action(7)
}
function action8() {
    action(8)
}
function action9() {
    action(9)
}
function action0() {
    action(0)
}
function actionAdd() {
    apply()
    Operation = "+"
    currentElement = 0
    inputScreenElement.textContent += "+"
}
function actionSubtract() {
    apply()
    Operation = "-"
    currentElement = 0
    inputScreenElement.textContent += "-"
}
function actionDivide() {
    apply()
    Operation = "/"
    currentElement = 0
    inputScreenElement.textContent += "/"
}
function actionMultiply() {
    apply()
    Operation = "*"
    currentElement = 0
    inputScreenElement.textContent += "*"
}
function actionClear() {
    apply()
    Operation = "+"
    currentElement = 0
    Count = 0
    inputScreenElement.textContent = ""
    outputScreenElement.textContent = ""
}

function apply() {
    if (Operation=="+") {
        console.log("+")
        Count = Count+currentElement 
    }
    if (Operation=="-") {
        console.log("-")
        Count = Count-currentElement 
    }
    if (Operation=="/") {
        Count = Count/currentElement 
    }
    if (Operation=="*") {
        Count = Count*currentElement 
    }
}
function displayOutput() {
    if (Operation=="+") {
        console.log("+")
        outputScreenElement.textContent = Count+currentElement 
    }
    if (Operation=="-") {
        console.log("-")
        outputScreenElement.textContent = Count-currentElement 
    }
    if (Operation=="/") {
        outputScreenElement.textContent = Count/currentElement 
    }
    if (Operation=="*") {
        outputScreenElement.textContent = Count*currentElement 
    }
}
