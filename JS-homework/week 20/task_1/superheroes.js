class Hero {
    constructor (photo, universe, ego, occupation, friends, power, raiting, id){
        this.photo = photo;
        this.universe = universe;
        this.ego = ego;
        this.occupation = occupation;
        this.friends = friends;
        this.power = power;
        this.raiting = raiting;
        this.id = id
    }
}

let batman = new Hero(`<img src="images/batman.png" width="25%">`, 'DC Comics', 'Брюс Уэйн', 'борец с преступностью, филантроп, миллиардер', 'Робин, Бэтгерл', ' интеллект, обширные познания, знания боевых искусств, ловкость', 0, 0),
    superman = new Hero(`<img src="images/superman.png" width="25%">`, 'DC Comics', 'Кларк Кент', 'борец за справедливость', 'собака Крипто', 'непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм', 0, 1),
    ironman = new Hero(`<img src="images/ironman.png" width="25%">`, 'Marvel Comics', 'Тони Старк', 'гений, миллиардер, плейбой, филантроп', 'Мстители', 'высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы', 0, 2),
    spiderman = new Hero (`<img src="images/spiderman.png" width="25%">`, 'Marvel Comics', 'Питер Паркер', 'борец за справедливость, студент, фотограф', 'Мстители, Фантастическая четверка, Люди Икс', 'сверхчеловеческие рефлексы, «паучье чутье»', 0, 3),
    america = new Hero(`<img src="images/america.png" width="25%">`, 'Marvel Comics', 'Стивен Роджерс', 'супер-солдат', 'Мстители', 'сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя', 0, 4),
    thor = new Hero(`<img src="images/thor.png" width="25%">`, 'Marvel Comics', 'нет; полное имя — Тор Одинсон', 'борец за справедливость, скандинавский бог', 'Мстители', 'все, что моэет бог, плюс молот Мьелнир', 0, 5),
    hulk = new Hero(`<img src="images/hulk.png" width="25%">`, 'Marvel Comics', 'Брюс Беннер', 'супергерой, борец за справедливость, ученый-биохимик', 'Мстители', 'сверхчеловеческая сила искорость, выносливость, полет', 0, 6),
    wonderwom = new Hero(`<img src="images/wonderwom.png" width="25%">`, 'DC Comics', 'Диана Принс', 'супергероиня, секретарь-референт', 'Лига Справедливости, Бэтмен, Супермен', 'сверхчеловеческая сила и скорость, выносливость, полет', 0, 7),
    blackwidow = new Hero(`<img src="images/blackwidow.png" width="25%">`, 'Marvel Comics', 'Наташа Романофф', 'супергероиня, шпионка', 'Мстители', 'замедленное старение, знание многих языков', 0, 8),
    deadpool = new Hero(`<img src="images/deadpool.png" width="25%">`, 'Marvel Comics', 'Уэйд Уинстон Уилсон', 'антигерой, наемник', 'частично Мстители, Человек-паук, Росомаха', 'регенерация и бессмертие, сверхчеловеческая иммунная система', 0, 9);


let heroArr;
let list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', () => {
    heroArr = JSON.parse(localStorage.getItem('heroArr')) || [];

    if(heroArr.length === 0){
        heroArr =  [batman, superman, ironman, spiderman, america, thor, hulk, wonderwom, blackwidow, deadpool];
    }

    heroArr.forEach(item => {

        let box = document.createElement('div'),
            boxInfo = document.createElement('div'),
            btn = document.createElement('button'),
            boxRaiting = document.createElement('div');

        box.append(boxInfo);
        box.append(boxRaiting); 
        box.append(btn);
        list.append(box);

        btn.setAttribute('dataName', item.id);                 
        btn.innerHTML = 'Выбираю тебя';

        boxRaiting.innerHTML = `Рейтинг: ${item.raiting}`;
        boxInfo.innerHTML = `${item.photo}<br>
                            Вселенная: ${item.universe}<br>
                            Альтер эго: ${item.ego}<br>
                            Род деятельности: ${item.occupation}<br>
                            Друзья: ${item.friends}<br>
                            Супер-сила: ${item.power}<br>`;
    })
})

 
// Кнопка повышения рейтинга
list.addEventListener('click', (e) => {
    const elemId = e.target.getAttribute('dataName');
    console.log(elemId);

    const selected = heroArr.find(item  => item.id == elemId);
    // console.log(selected);
   
    if(selected){
       selected.raiting = selected.raiting + 1;
    //    console.log(selected.raiting);
    //    list.boxRaiting.innerHTML = `Рейтинг: ${selected.raiting}`; 
    }
    // console.log(heroArr[elemId].raiting);

    localStorage.setItem('heroArr', JSON.stringify(heroArr)); //доработать, чтобы изменение сохранялось только опредленной карточки
    document.location.reload();
})
