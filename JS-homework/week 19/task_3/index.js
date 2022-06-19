function calc(operator){
    let num1 = document.querySelector('#calc1').value;
    let num2 = document.querySelector('#calc2').value;
    let nums = new Calculator(num1, num2); //создаем объект с полученными числами

    // проверяем какая кнопка с действием была нажата и выводим результат
    let result = 
        (operator === '+') ? Calculator.sum(nums) :
        (operator === '-') ? Calculator.diff(nums) :
        (operator === '*') ? Calculator.mult(nums) :
        (operator === '/' && num2 != 0) ? Calculator.div(nums) : 'На ноль делить нельзя!';

    document.querySelector('#result').value = result;
}

// создаем класс с конструктором внутри
class Calculator{
    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    
// задаем математические действия с помощью статики, где действия происходят с числами из объекта nums    
    static sum(nums){
        return nums.num1 + nums.num2;
    }
    static diff(nums){
        return nums.num1 - nums.num2;
    }
    static mult(nums){
        return nums.num1 * nums.num2;
    }
    static div(nums){
        return nums.num1 / nums.num2;
    }
}
