import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


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
    // plugins: {
    //   legend: {
    //     display: false
    //   }
    // },
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


import { Datepicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/locales/ru';
Object.assign(Datepicker.locales, ru);

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
    data: [10, 20, 30],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  }
})

// document.querySelector('#taskBtn').addEventListener('click', postTask());

// // let taskDone = document.querySelector('#done').value,
// //     taskPocess = document.querySelector('#process').value,
// //     taskDeadline = document.querySelector('#deadline').value,
//     let input = document.querySelector('input').value,
//         list = document.querySelector('#list');

// let tasks;

// document.addEventListener('DOMContentLoaded', () => {
//   tasks = JSON.parse(localStorage.getItem('task')) || [];
//   console.log(tasks);

//   tasks.map(task => {
//     const box = document.createElement('div');
//     box.innerHTML = task;

//     list.append(box);
//   })
// })

// function setData(taskValue){
//   tasks.push(taskValue);
//   localStorage.setItem('task', JSON.stringify(tasks))
// }

// function postTask(){
//   const taskValue = input;

//   setData(taskValue);
//   const newListItem = document.createElement('div');
//   newListItem.innerHTML = value;
//   list.append(newListItem);
// }

