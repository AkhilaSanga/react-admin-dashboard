import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      editable
      selectable
      events={[
        { title: 'Event 1', date: '2024-06-01' },
        { title: 'Event 2', date: '2024-06-02' },
      ]}
    />
  );
};

export default Calendar;
