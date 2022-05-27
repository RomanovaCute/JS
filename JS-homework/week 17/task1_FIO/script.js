let array = [];

function fixName(){

    let userName = document.querySelector('input[id="userName"]');
    let trimName = userName.value.trim(); //убираем пробелы
    array = trimName.split(" "); //разделяем элементы массива на имя фамилию и отчество по отдельности
    
    //Фамилия
    for(let i=0; i<array.length; i++){
        if(array[i] !== ""){ //если элемент массива не пустая строка, то
            arrayName = array[i].toLowerCase(); //приводим все буквы к нижнему регистру
            correct(); //функция замены первой буквы на заглавную
            document.querySelector('input[id="surname"]').value = correctName; //кладем в "Фамилию" полученное значение
            array[i] = ""; //очищаем фамилию из массива
            break;
        }
    }

    //Имя - аналогично
    for(let i=0; i<array.length; i++){
        if(array[i] !== ""){
            arrayName = array[i].toLowerCase();
            correct();
            document.querySelector('input[id="name"]').value = correctName;
            array[i] = "";
            break;
        }
    }

    //Отчество - аналогично
    for(let i=0; i<array.length; i++){
        if(array[i] !== ""){
            arrayName = array[i].toLowerCase();
            correct();
            document.querySelector('input[id="patronymic"]').value = correctName;
            array[i] = "";
            break;
        }
    }
    //Очищаем поле ввода
    document.querySelector('#userName').value = "";
}
    //Замена первой буквы на заглавную
    function correct() {
        correctName = arrayName[0].toLocaleUpperCase() + arrayName.slice(1); 
        //задаем заглавную букву 0-го элемента + остальная часть элемента, начиная с индекса 1
}

button.addEventListener('click',fixName);
