import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import navBar from '../NavBar';
import TipEntry from '../TipModal';

const Calendar = () => {
    const [show, setShow] = useState(false);
    const [value, onChange] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    
    const toggleShowModal = () => {
        const newShowModal = !showModal;
        console.log(newShowModal);
        setShowModal(newShowModal)
    }

    return (
        <div className='calendar-container'>
            <h2>My Tips</h2>
            <div className='calendar'>
                <ReactCalendar onChange={onChange} value={value} onClickDay={toggleShowModal} tileContent={``}/>
            </div>
            {showModal ? <TipEntry toggleShowModal={toggleShowModal} /> : <></> }
            
            { navBar }
        </div>
    )
};

export default Calendar

