import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import navBar from '../NavBar';

const Calendar = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar-container'>
            <h2>Calendar</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} value={value} />
            </div>
            { navBar }
        </div>
    )
};

export default Calendar