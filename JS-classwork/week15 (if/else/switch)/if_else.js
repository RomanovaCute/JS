/*Проверка формы 1*/
function check(){
    let result = document.getElementById("test").value;
    if (result == ''){
        alert ('Ваше поле не заполнено');
    }
}

/*Сравнение двух чисел*/
function compare2(a,b){
    if (a>b) {
        console.log(a)
        return a;
    }
    else {
        return b;
    }
}

/*Сравнение трех чисел*/
function cmpare3 (a,b){
    if(a>b && a>c){
        console.log(a);
        return a;
    }
    else if (b>a && b>c){
        return b;
    }
    else {
        return c;
    }
}

/*Тенантный оператор*/
/*обычный вид*/
function checkAge(age){
    if (age>=18)
    alert ("Все ок");
    else
        alert("Вход разрешен");
}

/*тенантный вид*/
function checkAge(age){
    (age>=18) ? alert("Все ок") : alert("Вход разрешен")
}

/*Оператор switch - для набора действий на однотипное условие*/
function weekDayName(number){
    let name = '';
    switch (number){
        case 1: name = 'Понедельник'; break;
        case 2: name = 'Вторник'; break;
        case 3: name = 'Среда'; break;
        case 4: name = 'Четверг'; break;
        case 5: name = 'Пятница'; break;

        default: name = 'Такого дня недели нет';
    }
    return name;
}

// необходимо после каждого case добавлять break, 
// чтобы не выполянлось все после выбранного нами условия, 
// т.е. выполниятся все остальные case. break - ограничитель куска кода
