import "./index.css";
import NavBar from "../NavBar";
// import * as React from "react";
import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import React, { useState } from "react";

const Graph = () => {
  const { data } = useQuery(QUERY_TRANSACTIONS);
  const transations = data?.transactions || [];

  const obj = [
    ["date", "amount"],
    ["Monday", 20],
    ["Tuesday", 30],
    ["Wednesday", 0],
    ["Thursday", 47.69],
    ["Friday", 65],
    ["Saturday", 65],
    ["Sunday", 30],
  ];

  console.log(data);
  // obj.push(['date','amount'])
  // for(let i = 0; i < data.accounts[0].transactions.length; i++){
  //   obj.push([data.accounts[0].transactions[i].date, data.accounts[0].transactions[i].amount])
  // }
  // console.log(data)
  // for(let i = 0; i < data.length; i++){
  //   console.log(data[i])
  //   }

  return (
    <div>
      <div>
        <Chart
          width={"100vw"}
          height={"85vh"}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          // data={transactions}

          data={obj}
          // data={data.map((account) => ({
          //   user: account.user,
          //   amount: account.amount,
          //   date: account.date,
          // }))}

          // // {data.length.map((account) => ({
          // //   user: account.user,
          // //   amount: account.amount,
          // //   date: account.date
          // // })}

          // data={[
          //       ['date', 'amount'],
          //       ["Monday", 20 ],
          //       ["Tuesday", 30],
          //       ["Wednesday", 0],
          //       ["Thursday", 47.69],
          //       ["Friday", 65],
          //       ["Saturday", 65],
          //       ["Sunday", 30],
          //       ]}

          options={{
            title: "Tips per Week",
            hAxis: { title: "Day of the Week", minValue: 1, maxValue: 7 },
            vAxis: { title: "Tips", minValue: 0, maxValue: 100 },
            legend: "none",
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
      <NavBar/>
    </div>
  );
};

export default Graph;
