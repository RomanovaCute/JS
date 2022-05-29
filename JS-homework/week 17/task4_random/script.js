let numRandom;
let nums = [];
let min,
    max,
    average,
    sum = 0, //Изначально присваиваем 0, чтобы все последующие элементы массива прибавлялись к нему, если не задать будет выводить NaN при первом нажатии на кнопку
    mult = 1; //Аналогично

function random(){
    
    //Выводится массив рандомных чисел
    for (let i = 0; i<10; i++){
        numRandom = Math.round((Math.random()*(20) - 10));
        nums.push(numRandom);
    }

    min = Math.min.apply(Math, nums); //Минимальное значение из массива чисел
    max = Math.max.apply(Math, nums); //Максимальное число из массива

    for(let index = 0; index<nums.length; index++){
        sum += Number(nums[index]); //Находим сумму элементов массива
    }

    average = sum/10; //Среднее арифметическое


    for(let index1 = 0; index1<nums.length; index1++){
        mult *= Number(nums[index1]);
    }

    document.querySelector('.arr').innerHTML = `Сгенерировали: ${nums.join(', ')}`;
    document.querySelector('.min').innerHTML = `Минимальное: ${min}`;
    document.querySelector('.max').innerHTML = `Максимальное: ${max}`;
    document.querySelector('.average').innerHTML = `Среднее арифметическое: ${average}`;
    document.querySelector('.sum').innerHTML = `Сумма чисел: ${sum}`;
    document.querySelector('.mult').innerHTML = `Произведение чисел: ${mult}`;

    //Очистка массива
    for (let index2 = 0; index2 < 10; index2++) {
        nums.pop(nums[index2]);
    }

    // Очистка значения суммы и произведения
    sum = 0;
    mult = 1;
}

button.addEventListener('click', random);