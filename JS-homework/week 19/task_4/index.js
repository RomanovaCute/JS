class Validator {
    isEmail(string){
        const emailFormat = /^[a-zA-Z0-9_\.]{4,16}@[a-z]{3,10}\.[a-z]{2,3}$/gm;
        return emailFormat.test(string);
    }

    isDomain(string){
        const domainFormat = /^(http[s]?\:\/\/)?((\w+)\.)?(([\w-]+)?)(\.[\w-]+){1,2}$/;
        return domainFormat.test(string);
    }

    // дата в формате дд.мм.гггг
    isDate(string){
        const dateFormat = /^(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d$/gm;
        return dateFormat.test(string);
    }

    isPhone(string){
        const phoneFormat = /^\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}$/gm;
        return phoneFormat.test(string);
    }
}


class ValidatorStatic {
    static isEmail(string) {
      const emailFormat = /^[a-zA-Z0-9_\.]{4,16}@[a-z]{3,10}\.[a-z]{2,3}$/gm;
      return emailFormat.test(string)
    }
    
    static isDomain(string) {
        const domainFormat = /^(http[s]?\:\/\/)?((\w+)\.)?(([\w-]+)?)(\.[\w-]+){1,2}$/;
        return domainFormat.test(string)
    }

    static isDate(string) {
        const dateFormat = /^(0[1-9]|[12][0-9]|3[01])[- .](0[1-9]|1[012])[- .](19|20)\d\d$/gm;
        return dateFormat.test(string)
    }

    static isPhone(string) {
        const phoneFormat = /^\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        return phoneFormat.test(string)
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67'));


console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны