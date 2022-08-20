import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card'

const plans = [
  {
    title: 'Безлимитный 300',
    price: '300',
    speed: '100',
    terms: 'Объем включенноготрафика не ограничен'
  },
  {
    title: 'Безлимитный 450',
    price: '450',
    speed: '50',
    terms: 'Объем включенноготрафика не ограничен'
  },
  {
    title: 'Безлимитный 550',
    price: '550',
    speed: '100',
    terms: 'Объем включенноготрафика не ограничен'
  },
  {
    title: 'Безлимитный 1000',
    price: '1000',
    speed: '200',
    terms: 'Объем включенноготрафика не ограничен'
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
                terms={plan.terms}>
          </Card>
        )
       }
    </div>
  );
}

export default App;
