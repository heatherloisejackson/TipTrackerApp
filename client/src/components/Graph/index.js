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
  // Insert the code to make a graphql call here. Use query hook
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
  width={'100vw'}
  height={'85vh'}
  chartType="ScatterChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Day', 'Tips'],
    ["Monday", 20 ],
    ["Tuesday", 30],
    ["Wednesday", 0],
    ["Thursday", 47.69],
    ["Friday", 65],
    ["Saturday", 65],
    ["Sunday", 30],
  ]}
  options={{
    title: 'Tips per Week',
    hAxis: { title: 'Day of the Week', minValue: 1  , maxValue: 7 },
    vAxis: { title: 'Tips', minValue: 0, maxValue: 100 },
    legend: 'none',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
</div>
        
    )
}



export default Graph