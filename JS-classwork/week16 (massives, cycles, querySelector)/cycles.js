let names = ["Маша", "Саша", "Женя"];

for(let i=0; i < names.length; i++){
    console.log(i);
    console.log(names[i]);
}

//i - порядковый номер в массиве

//Как работает цикл
let i = 0;
if(i< names.length){
    console.log(0);
    console.log(names[0]);
}

i++; //i = i+1;
//i = 1;
if(i< names.length){
    console.log(1);
    console.log(names[1]);
}

i++; //i=i+1;
//i = 2;
if(i< names.length){
    console.log(2);
    console.log(names[2]);
}


// Цикл, если НЕ важен порядковый номер элемента 
// (т.е. нам просто нужно их все перебрать)

for (let name of names){
    console.log(name);
}

// Метод for each - запуск какого-либо действия 
// для каждого элемента массива

names.forEach(function (name, index){
    console.log(index);
    console.log(name);
}
);
//index - пишем, если нужно вывести номер элемента тоже


// Другой вариант объявления массива
let names1 = new Array("Маша", "Саша", "Женя");

//если задать так, то будет масссив, состоящий из трех пустых элементов:
let names2 = new Array(3);