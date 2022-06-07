function fixName(){

    const inputs = document.querySelectorAll('.result-input'); 
        array = document.querySelector('input[id="userName"]') //Забираем значение из инпута userName
            .value
            .trim()
            .toLowerCase()
            .split(" ");
        // Эти действия можно сразу применить к value
    
    for(let i = 0; i < inputs.length; i++){
        const item = array[i];

        if (!item) { //Если значения в userName нет совсем, то выходим из функции
            return;
        }

        inputs[i].value = item[0].toLocaleUpperCase() + item.slice(1);
    }
    
    //Очищаем поле ввода
    document.querySelector('#userName').value = "";
}

button.addEventListener('click',fixName);
