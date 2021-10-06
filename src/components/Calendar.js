import React, { useState } from 'react';
import Calendar from 'react-calendar';



function App (){
    const [selectedDate, setSelectedDate] = useState(null)
    return(
        <div className='App'>
            <Calendar
            selected={selectedDate}
            onchange={date => setSelectedDate(date)}
            />
        </div>
    )
}

export default Calendar;