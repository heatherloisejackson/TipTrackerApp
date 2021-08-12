import "./index.css";
import NavBar from "../NavBar";
import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import React from "react";
import decode from 'jwt-decode';

const Graph = (props) => {
  const id = decode(localStorage.getItem('id_token'))
  const _id = id.data._id
  const { loading, error, data } = useQuery(QUERY_TRANSACTIONS, {
    variables: { _id },
  });
  var obj = []
  if (error) console.log(error);
  if (loading) {return 'Loading...'} else {
    
  

  const loadData = () =>{
      obj.push(['date', 'amount'])
      for (let i = 0; i < data.account.transactions.length; i++) {
        obj.push([data.account.transactions[i].date, data.account.transactions[i].amount])
      }
      console.log(obj);
      return obj
  }

  // const obj = [
  //   ["date", "amount"],
  //   ["Monday", 20],
  //   ["Tuesday", 30],
  //   ["Wednesday", 0],
  //   ["Thursday", 47.69],
  //   ["Friday", 65],
  //   ["Saturday", 65],
  //   ["Sunday", 30],
  // ];
  loadData()
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
      <NavBar />
    </div>
  );
}}

export default Graph;
