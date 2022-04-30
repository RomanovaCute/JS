function fun_plus(){
    let num1=prompt("Введите первое слагаемое: ");
    let num2=prompt("Введите второе слагаемое: ");
    alert(`Результат сложения: ${Number(num1)+Number(num2)}`);
}

function fun_minus(){
    let num1=prompt("Введите уменьшаемое: ");
    let num2=prompt("Введите вычитаемое: ");
    alert(`Результат вычитания: ${Number(num1)-Number(num2)}`);
}

function fun_mult(){
    let num1=prompt("Введите первый множитель: ");
    let num2=prompt("Введите второй множитель: ");
    alert(`Результат умножения: ${Number(num1)*Number(num2)}`);
}

function fun_divide(){
    let num1=prompt("Введите делимое: ");
    let num2=prompt("Введите делитель: ");
    alert(`Результат деления: ${Number(num1)/Number(num2)}`);
}
