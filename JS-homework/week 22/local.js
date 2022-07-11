// document.querySelector('#taskBtn').addEventListener('click', postTask);

// let taskDone = document.querySelector('#done').value,
//     taskPocess = document.querySelector('#process').value,
//     taskDeadline = document.querySelector('#deadline').value,
//     // input = document.querySelector('input').value,
//     list = document.querySelector('#taskBox');

// let tasks;

// document.addEventListener('DOMContentLoaded', () => {
//   tasks = JSON.parse(localStorage.getItem('tasks'));
//   console.log(tasks);

//   tasks.map(task => {
//     const box = document.createElement('div');
//     box.innerHTML = task;

//     list.append(box);
//   })
// })

// function setData(taskValue){
//   tasks.push(taskValue);
//   localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// function postTask(){
//   const taskValue = taskDone;

//   setData(taskValue);
//   const newListItem = document.createElement('div');
//   newListItem.innerHTML = taskValue;
//   list.append(newListItem);
// }