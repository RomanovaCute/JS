btn.addEventListener('click', send)
async function send(){

    fetch('https://httpbin.org/post', {
        body: new FormData(formData),
        method: 'POST'
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log(error))
}


// btnFile.addEventListener('change', (e) => {
//     e.preventDefault();

//     send({
//         method: 'POST',
//         file: e.target.files[0]
//     })  
// })
