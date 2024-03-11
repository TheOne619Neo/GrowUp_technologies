// create class to store information of what input is inserted on calculator
class Calculator{
    constructor(firstOperant, secondperant){
        this.firstOperant = firstOperant
        this.secondperant = secondperant
        this.clearButton()  //set all inputs to defualt ,empty when calc starts
    }



clearButton(){
    this.first = ""
    this.second = ''
    this.operation = undefined
    }

deleteButton(){

    }

updateDisplay(){
    this.firstOperant.innerText = this.first
    }

result(){// display calc 

    }

appendNumber(number){ //appends values selectted
    this.first =number
    }

chooseOperation(operand){//select operands

    }

}

const numberButtons = document.querySelectorAll('[data-numbers]')           //get access to data attributes specifically calculator numbers in html
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')                 //selects individual keywords seeing theres only one 
const deleteButton = document.querySelector('[data-delete]') 
const clearButton = document.querySelector('[data-all-clear]') 
const firstOperant = document.querySelector('[data-first-input-value]')
const secondperant = document.querySelector('[data-second-input-value]')

const calculator = new Calculator(firstOperant, secondperant )

numberButtons.forEach(button=>{button.addEventListener('click',()=>{calculator.appendNumber(button.innerText)
calculator.updateDisplay()})
})