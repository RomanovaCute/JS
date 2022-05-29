function formatDate (date){
    let diffDate = Math.floor((new Date() - date)/1000); //определение разницы между датой сейчас и введенной датой + перевод в секунды

    //Задаем параметры даты
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    //Форматируем дату в нужный вид
    if(day < 10){
        day = '0' + day;
    }
    if(month < 10){
        month = '0' + month;
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }

    //Вывод результата
    if(diffDate < 1){
        return('Прямо сейчас'); 
    } 
    else if(diffDate < 60){
        return( diffDate + ' ' + 'сек. назад');
    } 
    else if(diffDate/60 < 60){
        return(diffDate/60 + ' ' + 'мин. назад') ;
    } 
    else {
        return (`${day}.${month}.${year} ${hours}:${minutes}`);
    }
}

// button.addEventListener('click',formatDate);


    alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
    alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
    alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
    alert(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата