/*Пустые массивы*/
// let items = new Array();
// let items2 = [];


/*Не пустые массивы*/
let names = ["Маша", "Саша", "Женя"];
let numbers = [1, 2, 3];

let arr = [ 1, 3, 2 ];
arr.sort();
alert( arr );  // 1, 2, 3

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
  });

for (let i=2; i<=10; i++) {
    if (i % 2 == 0)
    console.log(i);
  }
