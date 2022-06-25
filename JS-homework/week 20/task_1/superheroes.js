class Hero {
    constructor (photo, universe, ego, occupation, friends, power, raiting, id){
        this.photo = photo;
        this.universe = universe;
        this.ego = ego;
        this.occupation = occupation;
        this.friends - friends;
        this.power = power;
        this.raiting = raiting;
        this.id = id
    }
}

let batman = new Hero(`<img src="images/batman.png" width="25%">`, 'DC Comics', 'Брюс Уэйн', 'борец с преступностью, филантроп, миллиардер', 'Робин, Бэтгерл', ' интеллект, обширные познания, знания боевых искусств, ловкость', 0, 1),
    superman = new Hero(`<img src="images/superman.png" width="25%">`, 'DC Comics', 'Кларк Кент', 'борец за справедливость', 'собака Крипто', 'непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм', 0, 2),
    ironman = new Hero(`<img src="images/ironman.png" width="25%">`, 'Marvel Comics', 'Тони Старк', 'гений, миллиардер, плейбой, филантроп', 'Мстители', 'высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы', 0, 3),
    spiderman = new Hero (`<img src="images/spiderman.png" width="25%">`, 'Marvel Comics', 'Питер Паркер', 'борец за справедливость, студент, фотограф', 'Мстители, Фантастическая четверка, Люди Икс', 'сверхчеловеческие рефлексы, «паучье чутье»', 0, 4),
    america = new Hero(`<img src="images/america.png" width="25%">`, 'Marvel Comics', 'Стивен Роджерс', 'супер-солдат', 'Мстители', 'сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя', 0, 5),
    thor = new Hero(`<img src="images/thor.png" width="25%">`, 'Marvel Comics', 'нет; полное имя — Тор Одинсон', 'борец за справедливость, скандинавский бог', 'Мстители', 'все, что моэет бог, плюс молот Мьелнир', 0, 6),
    hulk = new Hero(`<img src="images/hulk.png" width="25%">`, 'Marvel Comics', 'Брюс Беннер', 'супергерой, борец за справедливость, ученый-биохимик', 'Мстители', 'сверхчеловеческая сила искорость, выносливость, полет', 0, 7),
    wonderwom = new Hero(`<img src="images/wonderwom.png" width="25%">`, 'DC Comics', 'Диана Принс', 'супергероиня, секретарь-референт', 'Лига Справедливости, Бэтмен, Супермен', 'сверхчеловеческая сила и скорость, выносливость, полет', 0, 8),
    blackwidow = new Hero(`<img src="images/blackwidow.png" width="25%">`, 'Marvel Comics', 'Наташа Романофф', 'супергероиня, шпионка', 'Мстители', 'замедленное старение, знание многих языков', 0, 9),
    deadpool = new Hero(`<img src="images/deadpool.png" width="25%">`, 'Marvel Comics', 'Уэйд Уинстон Уилсон', 'антигерой, наемник', 'частично Мстители, Человек-паук, Росомаха', 'регенерация и бессмертие, сверхчеловеческая иммунная система', 0, 10);

let heroArr = [batman, superman, ironman, spiderman, america, thor, hulk, wonderwom, blackwidow, deadpool];

let list = document.querySelector('#list');
heroArr.forEach(item => {
    const box = document.createElement('div'),
        boxInfo = document.createElement('div'),
        button = document.createElement('button');
        
    button.setAttribute('btn', 'id');


    box.append(boxInfo);
    box.append(button);    
    list.append(box);

    boxInfo.innerHTML = `${item.photo}<br>
                         Вселенная: ${item.universe}<br>
                         Альтер эго: ${item.ego}<br>
                         Род деятельности: ${item.occupation}<br>
                         Друзья: ${item.friends}<br>
                         Супер-сила: ${item.power}<br>
                         Рейтинг: ${item.raiting}`

    button.setAttribute('data-name', item.id);                 
    button.innerHTML = 'Выбираю тебя';
})

btn.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-name');

    const selected = boxInfo.find(item => item.id === id);

    if(selected){
        selected.raiting = selected.raiting + 1;
        // Дописать присввоение рейтинга
    }
})
