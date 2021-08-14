import "./index.css";
import NavBar from "../NavBar";
import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import React, { useState } from "react";
import decode from 'jwt-decode';
import moment from 'moment';
import TipUD from "../TipUD";
import dateFormat from "../../utils/dateFormat";

const Graph = (props) => {
  const id = decode(localStorage.getItem('id_token'))
  const _id = id.data._id
  const [showModal, setShowModal] = useState(false);
  const [date, onChange] = useState(new Date()/* moment().format("MMM Do YY") */);
  const { loading, error, data } = useQuery(QUERY_TRANSACTIONS, {
    variables: { _id },
  });
  var obj = []

  const toggleShowModal = (e, value) => {
    setShowModal(!showModal)
  }

  if (error) console.log(error);
  if (loading) { return 'Loading...' } else {

    const loadData = () => {
      obj = []
      let arraySort = [...data.account.transactions]
      const sortedActivities = arraySort.sort((a, b) => a.date.localeCompare(b.date))
      obj.push(['date', 'amount'])
      if (arraySort.length === 0) {
        obj.push([dateFormat(moment()), 0])
      }
      for (let i = 0; i < sortedActivities.length; i++) {
        obj.push([sortedActivities[i].date, sortedActivities[i].amount])
      }
      return obj
    }

    loadData()
    return (
      <div>
        <div>
          <Chart
            width={"100%"}
            height={"85vh"}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}

            data={obj}

            options={{
              title: "Tips per Week",
              hAxis: { title: moment().format('MMMM Do YYYY'), minValue: 1, maxValue: 7, textPosition: "none" },
              vAxis: { title: "Tips", minValue: 0, maxValue: 100, textPosition: "none" },
              legend: "none",
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
        <NavBar />

      </div>
    );
  }
}

export default Graph;