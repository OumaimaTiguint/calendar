import React from 'react';
import { Typography } from '@mui/material';

const ViewEvent = ({ event }) => {

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg text-center font-bold mb-4">{event.title}</h2>
        <Typography variant="subtitle1"><strong>Reason:</strong> {event.reason}</Typography>

        <Typography variant="subtitle1">
          <strong>Start Date:</strong> {event.start.toISOString().split('T')[0]}
        </Typography>

        <Typography variant="subtitle1">
          <strong>End Date:</strong> {event.end.toISOString().split('T')[0]}
        </Typography>
      </div>
    </div>
  );
};

export default ViewEvent;