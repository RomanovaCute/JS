function random(){
    // Для того, чтобы не писать отдельно "Очистку массива", объявляем переменные сразу в фукнции
    let nums = [];
    let min,
    max,
    average,
    sum = 0, //Изначально присваиваем 0, чтобы все последующие элементы массива прибавлялись к нему, если не задать будет выводить NaN при первом нажатии на кнопку
    mult = 1; //Аналогично
    
    //Выводится массив рандомных чисел - происходит рандом и сразу числа добавляются друг за другом
    for (let i = 0; i < 10; i++){
        nums.push(Math.round(Math.random()*20 - 10));
    }

    // ... сделают так, что [1,2,3] скобки пропадут, и останутся чисто параметры 1,2,3
    min = Math.min(...nums); //Минимальное значение из массива чисел
    max = Math.max(...nums); //Максимальное число из массива

    /**
     * @description Сложение и умнржение полученных чисел: 
     * @param {number} a - первый элемент (текущее значение)
     * @param {number} b - второй элемент (предыдущее значение)
     */
    sum = nums.reduce((a,b) => a + b);
    mult = nums.reduce((a,b) => a * b);

    average = sum/nums.length; //Среднее арифметическое

    // Сложение
    // for(let index = 0; index<nums.length; index++){
    //     sum += Number(nums[index]);
    // }

    // Умножение
    // for(let index1 = 0; index1<nums.length; index1++){
    //     mult *= Number(nums[index1]);
    // }

    document.querySelector('.arr').innerHTML = `Сгенерировали: ${nums.join(', ')}`;
    document.querySelector('.min').innerHTML = `Минимальное: ${min}`;
    document.querySelector('.max').innerHTML = `Максимальное: ${max}`;
    document.querySelector('.average').innerHTML = `Среднее арифметическое: ${average}`;
    document.querySelector('.sum').innerHTML = `Сумма чисел: ${sum}`;
    document.querySelector('.mult').innerHTML = `Произведение чисел: ${mult}`;

button.addEventListener('click', random);