const input = document.querySelector('input'),
    button = document.querySelector('#button'),
    list = document.querySelector('#commentsList');

document.addEventListener('DOMContentLoaded', () => {
    const comments = getData();
    
    comments.map(comment => {
        const box = document.createElement('div');
        box.innerHTML = comment;

        list.append(box);
    });
});


function setData(value){
    localStorage.setItem('comments', JSON.stringify(comment.push(value)));
}

function getData(){
    return JSON.parse(localStorage.getItem('comments')) || [];
}

button.addEventListener('click', postComment)

function postComment(){
    input.value;
    const comment = getData();
    
    setData(input.value);
}











// function censor (){
//     let comment = document.querySelector('input[name="newComment"]').value
//         .replace(/viagra/gi, '***')
//         .replace(/xxx/gi, '***');

    // escape-последовательности применимы тольк внутри строки, например,
    // 'строка1\n строка2\n строка3\n'
    // но при конкатинации разных отедльных констант escape-последовательность не сработает
    
    // const newListItem = document.createElement('div'); //создает <div></div>
    // newListItem.innerHTML = comment; //добавлет коммент. <div>текст</div>

    // append - добавление наших созданных <div>текст</div> в конец
    // prepend - добавление в начало списка
   

//     document.querySelector('input[name="newComment"]').value = '';
// }

// document.querySelector('#button').addEventListener('click', censor);