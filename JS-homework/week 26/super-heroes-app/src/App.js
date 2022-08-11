import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card'



const heroes = [
  {
    path: `https://cdn4.iconfinder.com/data/icons/blast/127/batman-256.png`,
    name: 'Бэтмэн',
    universe: 'DC Comics',
    ego: 'Брюс Уэйн',
    occupation: 'борец с преступностью, филантроп, миллиардер',
    friends: 'Робин, Бэтгерл',
    power: 'интеллект, обширные познания, знания боевых искусств, ловкость'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/people-40/48/superhero_male-256.png',
    name: 'Супермэн',
    universe: 'DC Comics',
    ego: 'Кларк Кент',
    occupation: 'борец за справедливость',
    friends: 'собака Крипто',
    power: 'непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/127/ironman-256.png',
    name: 'Железный человек',
    universe: 'Marvel Comics',
    ego: 'Тони Старк',
    occupation: 'гений, миллиардер, плейбой, филантроп',
    friends: 'Мстители',
    power: 'высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/127/spiderman-256.png',
    name: 'Человек-паук',
    universe: 'Marvel Comics',
    ego: 'Питер Паркер',
    occupation: 'борец за справедливость, студент, фотограф',
    friends: 'Мстители, Фантастическая четверка, Люди Икс',
    power: 'сверхчеловеческие рефлексы, «паучье чутье»'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/128/captain-america-256.png',
    name: 'Капитан Америка',
    universe: 'Marvel Comics',
    ego: 'Стивен Роджерс',
    occupation: 'супер-солдат',
    friends: 'Мстители',
    power: 'сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/127/thor-256.png',
    name: 'Тор',
    universe: 'Marvel Comics',
    ego: 'нет; полное имя — Тор Одинсон',
    occupation: 'борец за справедливость, скандинавский бог',
    friends: 'Мстители',
    power: 'все, что моэет бог, плюс молот Мьелнир'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/127/hulk-256.png',
    name: 'Халк',
    universe: 'Marvel Comics',
    ego: 'Брюс Беннер',
    occupation: 'супергерой, борец за справедливость, ученый-биохимик',
    friends: 'Мстители',
    power: 'сверхчеловеческая сила искорость, выносливость, полет'
  },
  {
    path: 'https://cdn4.iconfinder.com/data/icons/blast/128/wonder-woman-256.png',
    name: 'Чудо-женщина',
    universe: 'DC Comics',
    ego: 'Диана Принс',
    occupation: 'супергероиня, секретарь-референт',
    friends: 'Лига Справедливости, Бэтмен, Супермен',
    power: 'сверхчеловеческая сила и скорость, выносливость, полет'
  }
]

function App() {
  return (
    <div className="App">
       {
        heroes.map(hero => 
          <Card path={hero.path} 
                name={hero.name}
                universe={hero.universe}
                ego={hero.ego}
                occupation={hero.occupation}
                friends={hero.friends}
                power={hero.power}>
          </Card>
        )
       }
    </div>
  );
}

export default App;
