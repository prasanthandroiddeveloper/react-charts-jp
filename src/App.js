import { useEffect, useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";
import { UserData } from "./Data";
import { options } from "./Options"
import Axios from 'axios'

// import MultiChart from "./components/MultiChart";

function App() {
  //const [UserData, setUserData] = useState([])
  useEffect(() => {
    // Axios.get("https://gist.githubusercontent.com/prasanthandroiddeveloper/309551519379904bc9b1aed9e98145c6/raw/f0e6209c497462cb3342abda747b56a22fbf8773/UserData.json").
    //   then((res => {


    //     // JSON.parse setUserData()
    //     var ress = (JSON.parse(JSON.stringify(res.data)))
    //     console.log(JSON.parse(ress));



    //   })).catch((error) => {
    //     console.log(error)
    //   })
  });
  var data = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "blue",
        borderWidth: 1,
      },
    ],
  }


  return (
    <div>
      <div className="App" style={{ display: "flex" }}>
        <div style={{ width: 500 }}>
          <h1>Bar Chart</h1>
          <BarChart options={options} chartData={data} />
        </div>
        <div style={{ width: 500, height: 300 }}>
          <h1>Line Chart</h1>
          <LineChart options={options} chartData={data} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: 500, height: 200 }}>
          <h1>Pie Chart</h1>
          <PieChart options={options} chartData={data} />
        </div>
        <div style={{ width: 500 }}>
          <h1>Doughnut Chart</h1>
          <DoughnutChart options={options} chartData={data} />
        </div>
        {/* <div style={{ width: 500 }}>
        <MultiChart chartData={userData} />
      </div> */}
      </div>
    </div>
  );
}

export default App;
