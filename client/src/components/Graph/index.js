import "./index.css";
import NavBar from "../NavBar";
import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import React from "react";
import decode from 'jwt-decode';
import moment from 'moment';

const Graph = (props) => {
  const id = decode(localStorage.getItem('id_token'))
  const _id = id.data._id
  const { loading, error, data } = useQuery(QUERY_TRANSACTIONS, {
    variables: { _id },
  });
  var obj = []
  if (error) console.log(error);
  if (loading) {return 'Loading...'} else {
    
  

  const loadData = () => {
    
    let arraySort = [...data.account.transactions]
    console.log(arraySort)
    // const sortedActivities = arraySort.sort((a, b) => a.amount - b.amount)
    const sortedActivities = arraySort.sort((a, b) => a.date.localeCompare(b.date))
    console.log(sortedActivities)
      obj.push(['date', 'amount'])
      for (let i = 0; i < sortedActivities.length; i++) {
        obj.push([sortedActivities[i].date, sortedActivities[i].amount])
      }
      // for (let i = 0; i < data.account.transactions.length; i++) {
      //   obj.push([data.account.transactions[i].date, data.account.transactions[i].amount])
      // }
      console.log(obj);
      return obj
  }

  loadData()
  return (
    <div>
      <div>
        <Chart
          width={"100vw"}
          height={"85vh"}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}

          data={obj}

          options={{
            title: "Tips per Week",
            hAxis: { title: "", minValue: 1, maxValue: 7 },
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
