btn.addEventListener('click', getGif);
let container = document.querySelector('#container');

async function getGif() {
    let search = document.querySelector('#search').value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=lROTt63xRcpYYrPja4zQWu6YndLhGFZP&q=${search}&limit=25&offset=0&rating=g&lang=en`)
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





