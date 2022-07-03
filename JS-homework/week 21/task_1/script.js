btn.addEventListener('click', getGif);
let container = document.querySelector('#container');

async function getGif() {
    let search = document.querySelector('#search').value;

    let apikey = 'lROTt63xRcpYYrPja4zQWu6YndLhGFZP',
        limit = 5,
        offset = 0,
        raiting = 'g',
        lang = 'ru',
        host = 'https://api.giphy.com/v1/gifs/',
        url = 'search';

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
        .catch(error => console.log(error))

    container.innerHTML = '';
    document.querySelector('#search').value = '';
}

    // url: 'search',
    // data: {
    //     api_key: 'lROTt63xRcpYYrPja4zQWu6YndLhGFZP',
    //     q: dog,
    //     limit: 25,
    //     offset: 0,
    //     raiting: g,
    //     lang: en
    // }





