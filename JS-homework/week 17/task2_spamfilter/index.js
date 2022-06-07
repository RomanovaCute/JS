const list = document.querySelector('#commentsList');

function censor (){
    let comment = document.querySelector('input[name="newComment"]').value
        .replace(/viagra/gi, '***')
        .replace(/xxx/gi, '***');

    // escape-последовательности применимы тольк внутри строки, например,
    // 'строка1\n строка2\n строка3\n'
    // но при конкатинации разных отедльных констант escape-последовательность не сработает
    
    const newListItem = document.createElement('div'); //создает <div></div>
    newListItem.innerHTML = comment; //добавлет коммент. <div>текст</div>

    // append - добавление наших созданных <div>текст</div> в конец
    // prepend - добавление в начало списка
    list.append(newListItem);

    document.querySelector('input[name="newComment"]').value = '';
}

document.querySelector('#button').addEventListener('click', censor);