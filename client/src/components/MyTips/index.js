import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import navBar from '../NavBar';
import TipEntry from '../TipModal';
import moment from 'moment';
const Calendar = (props) => {
    const [show, setShow] = useState(false);
    const [date, onChange] = useState(new Date()/* moment().format("MMM Do YY") */);
    const [showModal, setShowModal] = useState(false);


    const toggleShowModal = (e, value) => {
        //const newShowModal = !showModal;
        //console.log('Date:', date)
        setShowModal(!showModal)
    }

    return (
    
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} tileContent={"pog"} date={date} onClickDay={toggleShowModal} tileContent={``}/>
            </div>
            {showModal ? <TipEntry date={date} toggleShowModal={toggleShowModal} date={date}/* value={value} *//> : <></> }
            { navBar }
        </div>
    )
};

export default Calendar