import React, {useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from '../data/events';
import AddEvent from './AddEvent';
import ViewEvent from './ViewEvent';
import Modal from '@mui/material/Modal';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectSlot = (slot) => {
    setOpenModal(true);
    setSelectedSlot(slot);
    setOpenModal(true);
  };

  const handleSelectEvent = (event) => {
    setOpenInfoModal(true);
    setSelectedEvent(event);
    setOpenInfoModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    setOpenInfoModal(false);
    setSelectedSlot(null);
    setSelectedEvent(null);
  };

  return (
    <div>
      <Calendar
        selectable={true}
        localizer={localizer}
        events={events}
        onSelectEvent={handleSelectEvent}
        defaultView="month"
        views={["month"]}
        onSelectSlot={handleSelectSlot}
        startAccessor="start"
        endAccessor="end"
        longPressThreshold={1}
        style={{ height: 500 }}
      />

      {openModal && (
        <Modal open={openModal} onClose={closeModal}>
          <div>
            <AddEvent slot={selectedSlot} onClose={closeModal} />
          </div>
        </Modal>
      )}

      {openInfoModal && (
        <Modal open={openInfoModal} onClose={closeModal}>
          <div>
            <ViewEvent event={selectedEvent}/>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyCalendar;
