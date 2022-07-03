class Data {
    constructor (name, surname, lastname, country, phone, email, password){
        this.name = name;
        this.surname = surname;
        this.lastname = lastname;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();

    let user = new Data(
        document.querySelector('#name').value,
        document.querySelector('#surname').value,
        document.querySelector('#lastname').value,
        document.querySelector('#country').value,
        document.querySelector('#phone').value,
        document.querySelector('#email').value,
        document.querySelector('#password').value
    )
   
    console.log(user);
    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(resp => resp.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error))

})
