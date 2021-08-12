import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import NavBar from '../NavBar';
import TipEntry from '../TipModal';
import moment from 'moment';

const Calendar = (props) => {
    const [show, setShow] = useState(false);
    const [date, onChange] = useState(new Date()/* moment().format("MMM Do YY") */);
    const [showModal, setShowModal] = useState(false);


    const toggleShowModal = (e) => {
        //const newShowModal = !showModal;
        //console.log('Date:', date)
        setShowModal(!showModal)
    }

    return (
    
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} date={date} onClickDay={toggleShowModal} tileContent={``}/>
            </div>
            {showModal ? <TipEntry date={date} onChange={onChange} toggleShowModal={toggleShowModal} date={date}/* value={value} *//> : <></> }
            <NavBar/>
        </div>
    )
};

export default Calendar