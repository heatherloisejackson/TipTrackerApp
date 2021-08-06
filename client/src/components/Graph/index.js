import './index.css';
import navBar from '../NavBar';
import * as React from "react";
import { Chart } from "react-google-charts";

// const data = [
//     ["Year", "Sales", "Expenses"],
//     ["2004", 1000, 400],
//     ["2005", 1170, 460],
//     ["2006", 660, 1120],
//     ["2008", 1030, 540],
//     ["2009", 1000, 400],
//     ["2010", 1170, 460],
//     ["2011", 660, 1120],
//     ["2012", 1030, 540]
//   ];

//   const options = {
//     title: "My Tips",
//     curveType: "function",
//     legend: { position: "bottom" }
//   };


const Graph = () => {
    return (
        <div className='graph'>
            <h2>Graph</h2>
            { navBar }
        {/* <div className="App">
        <Chart
          chartType="ScatterChart"
          width="80%"
          height="400px"
          data={data}
          options={options}
          legendToggle
        />
      </div> */}
      <div>
      <Chart
  width={'600px'}
  height={'400px'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Age', 'Tips'],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7],
  ]}
  options={{
    title: 'Age vs. Weight comparison',
    hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
    vAxis: { title: 'Tips', minValue: 0, maxValue: 15 },
    legend: 'none',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
      </div>
        </div>
        
    )
}



export default Graph