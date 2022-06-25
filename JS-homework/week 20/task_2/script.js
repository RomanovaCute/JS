btn.addEventListener('click', getPic);
let predata = document.querySelector('#preArea');
let data = document.querySelector('#dataArea');


function getPic(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=Ddp2I4gfklmCil3Vjw0EQbhZ3EUA8OuIpbOGc8T3')
        .then(response => response.json())
        .then(astro => {
            console.log(astro);

            let titleBox = document.createElement('div');
            titleBox.setAttribute('id', 'title');
            titleBox.innerHTML = astro.title;
            predata.append(titleBox);

            let dateBox = document.createElement('div');
            dateBox.setAttribute('id', 'date');
            dateBox.innerHTML = astro.date;
            predata.append(dateBox);

            let textBox = document.createElement('div');
            textBox.setAttribute('id', 'text');
            textBox.innerHTML = astro.explanation;
            data.append(textBox);

            let imgBox = document.createElement('div');
            imgBox.innerHTML = `<img src="${astro.url}" width="60%"></img>`
            data.append(imgBox);

        })

        .catch(error => console.log(error));
    
    predata.innerHTML = '';
    data.innerHTML = '';
}
