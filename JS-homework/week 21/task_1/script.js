    btn.addEventListener('click', getGif);
    let container = document.querySelector('#container');

function getGif() {
        container.innerHTML = '';
        let search = document.querySelector('#search').value;

        let apikey = 'lROTt63xRcpYYrPja4zQWu6YndLhGFZP',
            limit = 5,
            offset = 0,
            raiting = 'g',
            lang = 'ru',
            host = 'https://api.giphy.com/v1/gifs/',
            url = 'search';
        
        try {
            let errLang = /[a-zA-Z]/gm;
            if(errLang.test(search)){
                throw new TypeError('Search in Russian language, please!');
            } 
        
            fetch(`${host}${url}?api_key=${apikey}&q=${search}&limit=${limit}&offset=${offset}&rating=${raiting}&lang=${lang}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);

            for(let i = 0; i<5; i++){
                let imgBox = document.createElement('img')
                imgBox.setAttribute('id', 'image');
                imgBox.setAttribute('src', response.data[i].images.downsized.url);
                container.append(imgBox);
            }      
    })  
    
    // .catch(err => console.log(err));

    } catch(err) {
            console.log(err.message);

            let errBox = document.createElement('div');
            let errP = document.createElement('p');
            errP.append(err.message);
            errBox.append(errP);
            container.append(errBox);
        }  

        
        document.querySelector('#search').value = ''; 
} 

 
