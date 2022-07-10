try {
    let user = undefined;
    console.log(user.name);
}
catch(error){
    console.log('Ошибка. Подробности:' + error.name);
}

// error.name - Имя ошибки, например TypeError
// error.message - Сообщение

// Если непраивльный формат JSON-а
try {
    let json = '[skjmfekw11=-]';
    console.log(JSON.parse(json));
}
catch(error){
    console.log('Ошибка. Подробности:' + error.name);
}


//======================================================
let a= 10;
let b = 0;
let result = 0;

try{
    if(b === 0)
        throw new Error('Нельзя делить на ноль');
    let result = a/b;

    console.log(result);
}
catch(error){
    console.log('Ваш формат данных некорректен. ПОдробности:' + error.message);
}
finally{
    console.log(result);
}

// !!! - у каждого блока (try, catch, finally) своя область видимости
// !!! - нельзя использовать try-catch снаружи от асинхронной функции, т.е. асинхронную функцию можно написать только внутрь try-catch