function checkIt(){
    let check = true;
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let country = document.getElementById('country');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    // const beginWithoutDigit = /^\D.*$/; /*переменная, обозначающая ввод цифр*/

    document.getElementById('errorMessage1').innerHTML = "";
    if (name.value == ''){
        document.getElementById('errorMessage1').innerHTML += 'Ваше имя не заполнено!';
        check = false;
    }

    document.getElementById('errorMessage2').innerHTML = "";
    if (surname.value == ''){
        document.getElementById('errorMessage2').innerHTML += 'Ваша фамилия не заполнена!';
        check = false;
    }

    document.getElementById('errorMessage3').innerHTML = "";
    if (country.value == ''){
        document.getElementById('errorMessage3').innerHTML += 'Ваша страна не выбрана!';
        check = false;
    }

    document.getElementById('errorMessage4').innerHTML = "";
    if (phone.value == ''){
        document.getElementById('errorMessage4').innerHTML += 'Ваш номер телефона не заполнен!';
        check = false;
    }

    document.getElementById('errorMessage5').innerHTML = "";
    if (email.value == ''){
        document.getElementById('errorMessage5').innerHTML += 'Ваше e-mail не заполнен!';
        check = false;
    }

    document.getElementById('errorMessage6').innerHTML = "";
    if (password.value == ''){
        document.getElementById('errorMessage6').innerHTML += 'Введите пароль!';
        check = false;
    }
    if(password.value.length < 8){
        document.getElementById('errorMessage6').innerHTML += 'Ваш пароль слишком короткий!'
        check = false;
    }
    // if(beginWithoutDigit.test(password)){
    //     document.getElementById('errorMessage6').innerHTML += 'Пароль не должен начинаться с цифр!'
    // }

    if(check === true){
    alert ('Региcтрация прошла успешно!');
    }
}
button.addEventListener('click',checkIt);