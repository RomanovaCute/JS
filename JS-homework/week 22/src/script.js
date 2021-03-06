
// Библиотека Chart.js
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// Библиотека календарей
import { Datepicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/locales/ru';
Object.assign(Datepicker.locales, ru);

const ctx = document.getElementById('myChart');
const labels = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#4072EE',
      tension: 0.1
    }]
  }
})

const ctxBar = document.getElementById('persBar');
const myBar = new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['mon'],
    datasets: [{
      label: '-',
      axis: 'y',
      data: [60],
      fill: false,
      backgroundColor: 'rgba(41, 203, 151, 1)',
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 5,
      barPercentage: 0.2,
      categoryPercentage: 0.9
    }]
  },
  options:{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const ctxBarSec = document.getElementById('persBarTwo');
const myBarSec = new Chart(ctxBarSec, {
  type: 'bar',
  data: {
    labels: ['mon'],
    datasets: [{
      label: '-',
      axis: 'y',
      data: [20],
      fill: false,
      backgroundColor: 'rgba(64, 114, 238, 1)',
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 5,
      barPercentage: 0.2,
      categoryPercentage: 0.9
    }]
  },
  options:{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const ctxBarThr = document.getElementById('persBarThree');
const myBarThr = new Chart(ctxBarThr, {
  type: 'bar',
  data: {
    labels: ['mon'],
    datasets: [{
      label: '-',
      axis: 'y',
      data: [20],
      fill: false,
      backgroundColor: 'rgba(181, 88, 246, 1)',
      borderWidth: 1,
      borderSkipped: false,
      borderRadius: 5,
      barPercentage: 0.2,
      categoryPercentage: 0.9
    }]
  },
  options:{
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const ctxMulti = document.getElementById('multiBar');
const multiBar = new Chart(ctxMulti, {
  type: 'bar',
  data: {
    labels: [' ', ' ', ' ', ' ' ],
    datasets: [{
      label: 'Copenhagen, Denmark',
      axis: 'y',
      data: [63, 47, 52, 81],
      fill: false,
      backgroundColor: 
        ['rgba(181, 88, 246, 1)',
         'rgba(41, 203, 151, 1)',
         'rgba(254, 196, 0, 1)',
         'rgba(64, 114, 238, 1)'
      ],
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.2,
      categoryPercentage: 1
    }]
  },
  options:{
    indexAxis: 'y',
    scales: {
      // x: {
      //   grid: {
      //     display: false,
      //     drawBorder: false
      //   },
      //   ticks: {
      //     display: false
      //   },
      // },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})


const elem = document.getElementById('Calend');
const datepicker = new Datepicker(elem, {
  showDaysOfWeek: true,
  showOnFocus: true,
  todayBtn: true,
  todayHighlight: true,
  language: 'ru',
});


import { DateRangePicker } from 'vanillajs-datepicker';
const item = document.getElementById('calendRange');
const rangepicker = new DateRangePicker(item, {
  language: 'ru',
  buttonClass: 'btn'
}); 


const ctxRound = document.getElementById('roundChart');
const round = new Chart(ctxRound, {
  type: 'doughnut',
  data: {
    labels: [
      'Не сделано',
      'Сделано',
      'В процессе'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }
})

document.querySelector('#taskBtn').addEventListener('click', postTask);

let taskDone = document.querySelector('#done'),
    taskPocess = document.querySelector('#process'),
    taskDeadline = document.querySelector('#deadline'),
    taskBox = document.querySelector('#taskBox');

let listShow;
let showRound;
let tasksDone,
    tasksProcess,
    tasksDeadline,
    roundInfo;

document.addEventListener('DOMContentLoaded', () => {
  listShow = JSON.parse(localStorage.getItem('taskList')) || [];
  console.log(listShow);

  if(localStorage.getItem('roundInfo')){
    showRound = JSON.parse(localStorage.getItem('roundInfo'));
    round.data.datasets[0].data = showRound;
  } else {
    round.data.datasets[0].data = [1, 1, 1]
  }
  round.update();
  console.log(showRound);

  for(let key in listShow){              //получаем доступ к ключам объекта done
    for(let item of listShow[key]){      //получаем доступ к массивам с объектами
      console.log(item.text);

      const box = document.createElement('div');
      box.innerHTML = item.text;         //выводим содержимое объекта под ключом text
      taskBox.append(box);
    }
  }
})


function setData(data, roundInfo){
  localStorage.setItem('taskList', JSON.stringify(data));
  localStorage.setItem('roundInfo', JSON.stringify(roundInfo));
}

let done = [],
    process = [],
    deadline = [];

function postTask(){
  const valueDone = taskDone.value;
  const valueProc = taskPocess.value;
  const valueDead = taskDeadline.value;

  class Task{
  constructor(text){
    this.text = text;
  }
}

  let data = {
    deadline,
    done,
    process
  }

  let dataCheck = localStorage.getItem('taskList');
  if(dataCheck){
     data = JSON.parse(dataCheck);
  }


  if(valueDead !== ''){
    data.deadline.push(new Task(valueDead));
  }
  if(valueDone !== ''){
    data.done.push(new Task(valueDone));
  }
  if(valueProc !== ''){
    data.process.push(new Task(valueProc));
  }
  console.log(data);

   roundInfo = [
    round.data.datasets[0].data[0] = data.deadline.length,
    round.data.datasets[0].data[1] = data.done.length,
    round.data.datasets[0].data[2] = data.process.length
   ]
  
  round.update();

  setData(data, roundInfo);
  const newListDone = document.createElement('div');
  newListDone.setAttribute('id', 'ItemDone');

  const newListProcess = document.createElement('div');
  const newListDeadline = document.createElement('div');

  newListDone.innerHTML = valueDone;
  newListProcess.innerHTML = valueProc;
  newListDeadline.innerHTML = valueDead;

  taskBox.append(newListDone, newListProcess, newListDeadline);

  taskDone.value = '';
  taskPocess.value = '';
  taskDeadline.value = '';
}

  // let clearBtn = document.createElement('button');
  // clearBtn.setAttribute('id', 'clearBtn');
  // clearBtn.innerHTML = 'Очистить';
  // taskBox.append(clearBtn);

  // document.querySelector('#clearBtn').addEventListener('click', clearList);
  // function clearList(){
  //   taskBox.innerHTML = '';
  // }


