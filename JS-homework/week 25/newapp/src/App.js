import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Часов в день"],
  ["Учеба", 8],
  ["Еда", 2],
  ["Дорога до учебы и обратно", 2],
  ["YouTube", 2],
  ["Сон", 7],
];

export const options = {
  title: "Mоя дневная активность",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default App;
