const textarea = document.querySelector('textarea'),
    button = document.querySelector('#button'),
    list = document.querySelector('#commentsList');

let notes;

document.addEventListener('DOMContentLoaded', () => {
    notes = JSON.parse(localStorage.getItem('notes')) || [] ;
    console.log(notes);

    notes.map(note => {
        const box = document.createElement('div');
        box.innerHTML = note;

        list.append(box);
    });
});


function setData(value){
    notes.push(value);
    localStorage.setItem('notes', JSON.stringify(notes));
    
}

function validateValue(value){
    let noteFormat = /^[\wа-яА-Я]+[^*@%#]$/gm;
    if (noteFormat.test(value)){
        return true;
    } else {
        document.querySelector('#noValid').innerHTML += 'Ваша заметка невалидна';
        return false;
    }
}

function postNote(){
    const value = textarea.value;
            
    if(validateValue(value)){
        setData(value);
        const newListItem = document.createElement('div');
        newListItem.innerHTML = value;
        list.append(newListItem);
    }

    
    
}

button.addEventListener('click', postNote)