//querySelectorAll
let elements1 = document.getElementsByClassName("item");
console.log(elements1);

for(let element of elements1){
    console.log(element.textContent);
}

let elements2 = document.querySelectorAll(".item");
console.log(elements2);

for(let element of elements2){
    console.log(element.classList);
}

//:last-child
let elements3 = document.querySelectorAll(".item:last-child");
console.log(elements3);

for(let element of elements3){
    console.log(element.classList);
}


querySelector
let elements5 = document.querySelector(".item");
console.log(elements5);

for(let element of elements5){
    console.log(element.classList);
}


let elements4 = document.querySelectorAll("input");
console.log(elements4);

for (let element of elements4){
    console.log(element.classList);
}

let arr = ["a", "b"];

arr.push(function() {
    alert(arr);
})