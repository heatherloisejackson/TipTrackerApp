import "./index.css";
import navBar from "../NavBar";
import * as React from "react";
import { Chart } from "react-google-charts";

// MD Import the useQuery() hook from Apollo Client
import { useQuery } from "@apollo/client";

// MD Import the query we are going to execute from its file
import { QUERY_TRANSACTIONS } from "../../utils/queries";

const Graph = () => {
  // MD Inserted the code to make a graphql call here. Use query hook
  const { data } = useQuery(QUERY_TRANSACTIONS);

  return (
    <div className="graph">
      <h2>Graph</h2>
      {navBar}
      <div>
        {console.log(data)}
        <Chart
          width={"100vw"}
          height={"85vh"}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["date", "amount"],
            ["Monday", 20],
            ["Tuesday", 30],
            ["Wednesday", 0],
            ["Thursday", 47.69],
            ["Friday", 65],
            ["Saturday", 65],
            ["Sunday", 30],
          ]}
          options={{
            title: "Tips per Week",
            hAxis: { title: "Day of the Week", minValue: 1, maxValue: 7 },
            vAxis: { title: "Tips", minValue: 0, maxValue: 100 },
            legend: "none",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </div>
  );
};

export default Graph;
