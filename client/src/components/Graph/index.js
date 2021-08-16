// STATS PAGE

import "./index.css";
import NavBar from "../NavBar";
import { Chart } from "react-google-charts";
import { useQuery } from "@apollo/client";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import React, { useState } from "react";
import decode from "jwt-decode";
import moment from "moment";
import TipUD from "../TipUD";
import dateFormat from "../../utils/dateFormat";

const Graph = (props) => {
  const id = decode(localStorage.getItem("id_token"));
  const _id = id.data._id;
  const [showModal, setShowModal] = useState(false);
  const [transID, setTransID] = useState();
  const [date, onChange] = useState(new Date());
  const { loading, error, data } = useQuery(QUERY_TRANSACTIONS, {
    variables: { _id },
  });
  var obj = [];

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  if (error) console.log(error);
  if (loading) {
    return "Loading...";
  } else {
    const loadData = () => {
      obj = [];
      let arraySort = [...data.account.transactions];
      const sortedActivities = arraySort.sort((a, b) =>
        b.date - a.date
      );
      obj.push(["date", "amount"]);
      for (let i = 0; i < sortedActivities.length; i++) {
        if (!(sortedActivities[i].amount === 0)) {
          obj.push([sortedActivities[i].date, sortedActivities[i].amount]);
        }
      }
      if (obj.length == 1) {
        obj.push([dateFormat(moment()), 0]);
      }
      return obj;
    };

    loadData();

    const chartEvents = [
      {
        eventName: "select",
        callback({ chartWrapper }) {
          const currentSel = chartWrapper.getChart().getSelection();
          let arraySort = [...data.account.transactions];
          const sortedActivities = arraySort.sort((a, b) =>
            a.date.localeCompare(b.date)
          );
          const currentTransactionID = sortedActivities[currentSel[0].row]._id;
          setTransID(currentTransactionID);
          toggleShowModal();
        },
      },
    ];

    return (
      <div>
        <div className="format">
          <Chart
            width={"100%"}
            height={"85vh"}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={obj}
            options={{
              title: "My Tips",
              backgroundColor: "#F7F3E3",
              fontName: "Fredoka One",
              fontSize: "25",
              hAxis: {
                title: "Tips Timeline",
                minValue: 1,
                maxValue: 7,
                textPosition: "none",
              },
              vAxis: {
                title: "Tips",
                minValue: 0,
                maxValue: 100,
                textPosition: "none",
              },
              legend: "none",
              colors: ["#CD5334", "#EDB88B"],
            }}
            chartEvents={chartEvents}
            rootProps={{ "data-testid": "1" }}
          />
          {showModal ? (
            <TipUD
              date={date}
              onChange={onChange}
              toggleShowModal={toggleShowModal}
              transID={transID}
            />
          ) : (
            <></>
          )}
        </div>
        <NavBar />
      </div>
    );
  }
};

export default Graph;
