button.addEventListener('click', creatValues);

class Cat {
    // nickname
    // name
    // phone
    // sex
    // breed
    // food

    constructor(nickname, name, phone, sex, breed, food){
        this.nickname = nickname;
        this.name = name;
        this.phone = phone;
        this.sex = sex;
        this.breed = breed;
        this.food = food;
    }
}

function creatValues(){
    const nickname = document.querySelector('#nickname').value
    const name = document.querySelector('#name').value
    const phone = document.querySelector('#phone').value
    const sex = checkedValueSex()
    const breed = checkedValueBreed()
    const food = checkedValueFood()

    function checkedValueSex(){
        let radioSex = document.querySelectorAll('input[name="sex"]');

        let valueSex = '';

        radioSex.forEach(radio =>{
            if (radio.checked){
                valueSex = radio.value;
            }
        })

        return valueSex;
    };

    function checkedValueBreed(){
        let selectBreed = document.querySelectorAll('option[name="breed"]');

        let valueBreed = '';

        selectBreed.forEach(item =>{
            if (item.checked){
                valueBreed = item.value;
            }
        })

        return valueBreed;
    };
    
    function checkedValueFood(){
        let radioFood = document.querySelectorAll('input[name="nutrition"]');

        let valueFood = '';

        radioFood.forEach(radio =>{
            if (radio.checked){
                valueFood = radio.value;
            }
        })

        return valueFood;
    };

    let newCat = new Cat(nickname, name, phone, sex, breed, food);
    console.log(newCat);
    return newCat;
}



