postButton.onclick = function (event) {
    event.preventDefault(); // позволяет странице не перезагружаться при отправке данных на сервер

    let user = {
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value
    }
    console.log(user);
    
    fetch('http://httpbin.org/post',
    {
        method: 'POST',
        body: user,
        headers: {
            'Content-Type': 'application/json; chatset=utf-8'
        },
    })

    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .cathc(error => console.log(error));

}