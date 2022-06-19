const input = document.querySelector('input'),
    button = document.querySelector('#button'),
    list = document.querySelector('#commentsList');

let comments; //объявляем переменную с массивом в глобальной области
let photos;

// при загрузке страницы вызывается функция, которая сначала достает из локального хранилища заполенный или пустой массив,
// предварительно превратив массив в виде строки в обычный масссив (parse)
document.addEventListener('DOMContentLoaded', () => {
    comments = JSON.parse(localStorage.getItem('comments')) || [] ;
    console.log(comments);
    
    photos = JSON.parse(localStorage.getItem('photo')) || [] ;
    
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

    // полученный массив перебирается методом map, и для каждого элемента массива выполняются следующие действия:
    comments.map(comment => {
        const box = document.createElement('div');
        box.innerHTML = comment;

        list.append(box);

    });

    photos.map(photo => {
        const box2 = document.createElement('div');
        box2.innerHTML = `<img src="${valuePhoto}">`
        list.append(box2);
    })
});


// добавление данных комментария в массив, а затем в локальное хранилище с ключом comments, предварительно превратившись в строку (stringify)
function setData(valueComment){
    comments.push(valueComment);
    localStorage.setItem('comments', JSON.stringify(comments)); 
}

function setPhoto(valuePhoto){
    photos.push(valuePhoto);
    localStorage.setItem('photos', JSON.stringify(photos));
}


function postComment(){
    const valueComment = document.querySelector('#newComment').value
            .replace(/viagra/gi, '***')
            .replace(/xxx/gi, '***');
            
    setData(valueComment);


    const newListItem = document.createElement('div');
    newListItem.innerHTML = valueComment;
    newListItem.innerHTML = JSON.parse(localStorage.getItem('photos')) || [] ;
    list.append(newListItem);
}

function savePhoto(){
    const valuePhoto = document.querySelector('#userPhoto').value;
    setPhoto(valuePhoto);
}

photo_button.addEventListener('click', savePhoto)
add_button.addEventListener('click', postComment)















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