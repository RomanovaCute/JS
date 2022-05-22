    //Задаем массив в функции, массив содержет значения из полей выбора, которые записываются в getElementById
    function calcPrice(){
        let carMassive = [
        document.getElementById("brand").value,
        document.getElementById("year").value,
        document.querySelector('input[name="bodycar"]').value,
        document.querySelector('input[name="engine"]').value,
        document.getElementById('displacement').value*10, //Прямо в массиве можно задать оператор (сложение, вычитание и т.д.)
        document.getElementById('power').value,
        document.querySelector('input[name="wheel"]').value,
        document.querySelector('input[name="transmission"]').value,
        document.getElementById('mileage').value*(-1),
    ]

    //Временная переменная temp для суммы, т.е. к 0 будут прибавляться выбранные значения
    let temp = 0;
    for(let i = 0; i<carMassive.length; i++){
        temp += Number(carMassive[i]);
    }
    //Условие, если полученное значение меньше стоимости марки, то выволится стоимость марки
    if(temp < carMassive[0]){
        temp = carMassive[0];
    }
    result.innerHTML = temp + " " + "тыс. руб";
    }
    

