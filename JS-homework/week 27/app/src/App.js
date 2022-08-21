import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card'

const plans = [
  {
    id: 1,
    title: 'Безлимитный 300',
    price: '300',
    speed: '100',
    terms: 'Объем включенного трафика не ограничен',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Безлимитный 450',
    price: '450',
    speed: '50',
    terms: 'Объем включенного трафика не ограничен',
    color: 'green'
  },
  {
    id: 3,
    title: 'Безлимитный 550',
    price: '550',
    speed: '100',
    terms: 'Объем включенно готрафика не ограничен',
    color: 'red'
  },
  {
    id: 4,
    title: 'Безлимитный 1000',
    price: '1000',
    speed: '200',
    terms: 'Объем включенно готрафика не ограничен',
    color: 'black'
  }
]

function App() {
  return (
    <div className="App">
         {
        plans.map(plan => 
          <Card title={plan.title}
                price={plan.price}
                speed={plan.speed}
                terms={plan.terms}
                color={plan.color}
                key={plan.id}>
          </Card>
        )
       }
    </div>
  );
}

export default App;
