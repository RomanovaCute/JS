// let arr = [];
let textString = '';

function censor (){
    let comment = document.querySelector('input[name="newComment"]').value;
    let new1 = comment.replace(/viagra/g, '***');
    let new2 = new1.replace(/xxx/g, '***');
    // new2 += '\n';
    // arr.unshift(new2 + '\r');

    textString = new2 + ' ' + textString +'\r\n';

    // for (let i=0; i<arr.length; i++){
       commentsList.innerHTML = textString; 
       console.log(textString);
    // }
}

button.addEventListener('click', censor);