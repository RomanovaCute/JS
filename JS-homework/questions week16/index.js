//Вопрос №1
let array = ['js', 'css', 'html'];
console.log(array[1]);

//Вопрос №2
let array1 = [0, 1, false, 2, undefined, '', 3, null];

//Первый способ
let filteredArray1 = array1.filter(el=>el !== false && el !== undefined && el !== '' && el !==null && el !== 0);
console.log(filteredArray1);

//Второй способ
let filteredArray2 = array1.filter(item => Boolean(item));
console.log(filteredArray2);

//Вопрос №3
let arrays = [
    [1,2], 
    [1,2,3], 
    [1,2,3,4],
]

let findIt2 = arrays.findIndex(element => element.length>3);
console.log(findIt2);




// let findIt = arrays.findIndex((element)=> {
//     if(element.length>3){
//         return true;
//     }
// })
// console.log(findIt);


