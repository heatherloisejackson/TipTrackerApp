import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import NavBar from '../NavBar';
import TipEntry from '../TipModal';
import moment from 'moment';

const Calendar = (props) => {
    const [date, onChange] = useState(new Date());
    const [showModal, setShowModal] = useState(false);


    const toggleShowModal = (e, value) => {
        setShowModal(!showModal)
    }

    return (
    
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} date={date} onClickDay={toggleShowModal} tileContent={``}/>
            </div>

            {showModal ? <TipEntry date={date} onChange={onChange} toggleShowModal={toggleShowModal}/> : <></> }
            <NavBar/>

        </div>
    )
};

export default Calendar