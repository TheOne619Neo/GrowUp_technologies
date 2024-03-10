// create class to store information of what input is inserted on calculator
class calculator{
    constructor(firstOperant, secondperant){
        this.firstOperant = firstOperant
        this.secondperant = secondperant
    }
}


const numberButtons = document.querySelectorAll('[data-numbers]')           //get access to data attributes specifically calculator numbers in html
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')                 //selects individual keywords seeing theres only one 
const deleteButton = document.querySelector('[data-delete]') 
const clearButton = document.querySelector('[data-all-clear]') 
const firstOperant = document.querySelector('[data-first-input-value]')
const secondperant = document.querySelector('[data-second-input-value]')
