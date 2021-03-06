// 'HOME' PAGE (CALENDAR)

import React, { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";
import NavBar from "../NavBar";
import TipEntry from "../TipModal";

const Calendar = (props) => {
  const [date, onChange] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="calendar-container">
      <h2>Enter Your Tips Below</h2>
      <div className="calendar">
        <ReactCalendar
          onChange={onChange}
          tileContent={"pog"}
          date={date}
          onClickDay={toggleShowModal}
          tileContent={``}
        />
      </div>
      {showModal ? (
        <TipEntry
          date={date}
          onChange={onChange}
          toggleShowModal={toggleShowModal}
        />
      ) : (
        <></>
      )}
      <NavBar />
    </div>
  );
};

export default Calendar;
