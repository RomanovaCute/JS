const input = document.querySelector('input'),
    button = document.querySelector('#button'),
    list = document.querySelector('#commentsList');

let comments;

document.addEventListener('DOMContentLoaded', () => {
    comments = JSON.parse(localStorage.getItem('comments')) || [] ;
    console.log(comments);
    
    
    // for(let i = 0; i<comments.length; i++){
    //     const box = document.createElement('div');
    //     box.innerHTML = comments[i];
    //     list.append(box);
    // }

    // comments.forEach((element) => {
    //     const box = document.createElement('div')
    //     box.innerHTML = element
    //     list.append(box)
    // });

    comments.map(comment => {
        const box = document.createElement('div');
        box.innerHTML = comment;

        list.append(box);
    });
});



function setData(value){
    comments.push(value);
    localStorage.setItem('comments', JSON.stringify(comments));
    
}

function postComment(){
    const value = input.value
            .replace(/viagra/gi, '***')
            .replace(/xxx/gi, '***');
            
    setData(value);

    
    const newListItem = document.createElement('div');
    newListItem.innerHTML = value;
    list.append(newListItem);
}

button.addEventListener('click', postComment)



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