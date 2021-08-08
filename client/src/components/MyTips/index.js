import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import navBar from '../NavBar';
import TipEntry from '../TipModal';

const Calendar = () => {
    const [value, onChange] = useState(new Date());
/*     const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */
    //const handleShow = () => {return(<TipEntry/>)};

    return (
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} value={value} />
                
            </div>
            <TipEntry/>
            { navBar }
        </div>
    )
};

export default Calendar