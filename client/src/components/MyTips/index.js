import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import navBar from '../NavBar';
import TipEntry from '../TipModal';

const Calendar = () => {
    const [show, setShow] = useState(false);
    const [value, onChange] = useState(new Date());
    const [toggle, setToggle] = useState(true);
    
    const what = function setToggles() {
        if(toggle == false){
            
            setToggle(true)
        }
        toggle ? setToggle(false): setToggle(true)
    }

    return (
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} value={value} onClickDay={what} tileContent={``}/>
            </div>
            {toggle ? <></> : <TipEntry/> }
            
            { navBar }
        </div>
    )
};

export default Calendar

