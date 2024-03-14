// create class to store information of what input is inserted on calculator
class Calculator{
   
    constructor(firstOperant, secondOperant){
        this.firstOperant = firstOperant
        this.secondOperant = secondOperant
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
        console.log("second :" + this.second, "first :" + this.first)
        
        this.firstOperant.innerText = this.first  
        this.secondOperant.innerText = this.second

        //this line, trying to put second input below the other after entering operation
        
        }


    appendNumber(number){ //appends values selectted
        if(number == '.' && this.second.includes('.'))
            return
        this.second =this.second.toString() + number.toString()//number
        }

    chooseOperation(operand){//select operands
     
        if(this.second == '')
            return
        if(this.first != ''){
            this.result()
        }

        this.operation = operand
        this.first= this.second
        this.second = ""
        }

    result(){// display calc 
        let computation
        const prev =parseFloat(this.firstOperant.innerText)
        const current =parseFloat(this.secondOperant.innerText)
        
        if(isNaN(prev) || isNaN(current))
            return
      
        switch(this.operation){
            case '+':
                computation = prev+current
                break
            case '-':
                computation = prev-current
                break
            case '*':
                computation = prev*current
                break
            case '÷':
                computation = prev/current
                break
            default:
                return
        }
        

        this.second = " "
        this.operation = undefined
        this.first = computation

    
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


operationButtons.forEach(button=>{button.addEventListener('click',()=>{calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()})
    })


equalButton.addEventListener('click',button=>{calculator.result() 
    calculator.updateDisplay()
})