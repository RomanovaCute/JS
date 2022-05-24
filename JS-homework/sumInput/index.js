function sumInput(){
    let arrayContainer = document.getElementById("arrayContainer");
    let temp;
    let array = [];
    //Выполняем цикл, пока...
    while (true){
        temp = prompt("Введите число:" );
        if(temp == '' || temp == 0 || temp == null){ 
            break;
        }
        else{
            array.push(temp);
        }
    }
    //Сортируем в порядке возрастания
    function compareNum (a, b){
        return a - b;
    }
    array.sort(compareNum);
    arrayContainer.innerHTML = array;
    
    //Выводи сумму
    let arraySum = document.getElementById("arraySum");

    temp= 0;
    for (let i = 0; i<array.length; i++){
        temp += Number(array[i]);
        console.log(temp);
    }
    arraySum.innerHTML = temp;
}
button.addEventListener('click',sumInput);