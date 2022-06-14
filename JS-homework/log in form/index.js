// function checkIt(){
    // let check = true;
    // let country = document.querySelector('#country').value;
    
    function checkIt(){
        document.querySelector('#errorMessage1').innerHTML = '';
        document.querySelector('#errorMessage2').innerHTML = '';
        document.querySelector('#errorMessage3').innerHTML = '';
        document.querySelector('#errorMessage4').innerHTML = '';
        document.querySelector('#errorMessage5').innerHTML = '';
        document.querySelector('#errorMessage6').innerHTML = '';
    }

    function validateName(){
        let name = document.querySelector('#name').value;
        let nameFormat = /^([А-Я]{1}[а-яё]{1,30}|[A-Z]{1}[a-z]{1,30})$/gm;
        if (nameFormat.test(name)){
            return true;
        } else {
            document.querySelector('#errorMessage1').innerHTML += 'Ваше имя заполнено неверно';
            return false;
        }
    }

    
    function validateSurname(){
        let surname = document.querySelector('#surname').value;
        let surnameFormat = /^([А-Я]{1}[а-яё]{1,30}|[A-Z]{1}[a-z]{1,30})$/gm;
        if (surnameFormat.test(surname)){
            return true;
        } else {
            document.querySelector('#errorMessage2').innerHTML += 'Ваша фамилия заполнена неверно';
            return false;
        }
    }

    function vidateCountry(){
//         let country = document.querySelector('#country');
//         country.forEach((sel) => {

//             sel.addEventListener('change', () => {
//             let countryNum = sel.selectedIndex;

//             if(countryNum === 0){
//                 document.querySelector('#errorMessage3').innerHTML += 'Ваша страна не выбрана!';
//             }
//         }
//     )
//     }
// )
  
        if (document.querySelector('#country').value !== "0"){
            return true;  
        } else {
            document.querySelector('#errorMessage3').innerHTML += 'Ваша страна не выбрана!';
        }
} 

    function validatePhoneNumber(){
        let phone = document.querySelector('#phone').value;
        let phoneFormat = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/gm;
        if (phoneFormat.test(phone)){
            return true;
        } else if (phone == '') {
            document.querySelector('#errorMessage4').innerHTML += 'Заполните номер телефона';
        }
        else {
            document.querySelector('#errorMessage4').innerHTML += 'Ваш номер телефона заполнен не верно';
            return false;
        }
    }

    function validateEmail(){
        let email = document.querySelector('#email').value;
        let emailFormat = /^[a-zA-Z0-9_\.]{4,16}@[a-z]{3,10}\.[a-z]{2,3}$/gm;
        if (emailFormat.test(email)){
            return true;
        } else {
            document.querySelector('#errorMessage5').innerHTML += 'Ваш email заполнен не верно';
            return false;
        }
    }

    function validatePassword(){
        let password = document.querySelector('#password').value;
        let passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}$/gm;
        if (passwordFormat.test(password)){
            return true;
        } else {
            document.querySelector('#errorMessage6').innerHTML += 'Ваш пароль не надежный!';
            return false;
        }
    }

button.addEventListener('click', checkIt)
button.addEventListener('click', function(){
    validateName(),
    validateSurname(),
    validatePhoneNumber(),
    validateEmail(),
    validatePassword();
});    



//Старая версия

//     document.querySelector('errorMessage1').innerHTML = "";
//     if (name.value == ''){
//         document.querySelector('errorMessage1').innerHTML += 'Ваше имя не заполнено!';
//         check = false;
//     }

//     document.querySelector('errorMessage2').innerHTML = "";
//     if (surname.value == ''){
//         document.querySelector('errorMessage2').innerHTML += 'Ваша фамилия не заполнена!';
//         check = false;
//     }

//     document.querySelector('errorMessage3').innerHTML = "";
//     if (country.value == ''){
//         document.querySelector('errorMessage3').innerHTML += 'Ваша страна не выбрана!';
//         check = false;
//     }

//     document.querySelector('errorMessage4').innerHTML = "";
//     if (phone.value == ''){
//         document.querySelector('errorMessage4').innerHTML += 'Ваш номер телефона не заполнен!';
//         check = false;
//     }

//     document.querySelector('errorMessage5').innerHTML = "";
//     if (email.value == ''){
//         document.querySelector('errorMessage5').innerHTML += 'Ваше e-mail не заполнен!';
//         check = false;
//     }

//     document.querySelector('errorMessage6').innerHTML = "";
//     if (password.value == ''){
//         document.querySelector('errorMessage6').innerHTML += 'Введите пароль!';
//         check = false;
//     }
//     if(password.value.length < 8){
//         document.querySelector('errorMessage6').innerHTML += 'Ваш пароль слишком короткий!'
//         check = false;
//     }
//     // if(beginWithoutDigit.test(password)){
//     //     document.querySelector('errorMessage6').innerHTML += 'Пароль не должен начинаться с цифр!'
//     // }

//     if(check === true){
//     alert ('Региcтрация прошла успешно!');
//     }
// }
