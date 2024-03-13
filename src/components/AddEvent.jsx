import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField, Grid, Typography } from '@mui/material';
import events from '../data/events';

const AddEvent = ({ slot, onClose }) => {
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState(slot.start.toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(slot.end.toISOString().split('T')[0]);

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {
    const newEvent = {
      title: title,
      reason: reason,
      start: new Date(startDate),
      end: new Date(endDate),
    };

    events.push(newEvent);

    setTitle('');
    setReason('');
    setStartDate('');
    setEndDate('');
    onClose();
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Selected Slot Data</h2>
        <FormControl fullWidth className="mb-4">
          <Typography variant="subtitle1">Title</Typography>
          <TextField
            id="title"
            variant="outlined"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth className="mb-4">
          <Typography variant="subtitle1">Reason</Typography>
          <Select
            id="reason"
            variant="outlined"
            value={reason}
            onChange={handleReasonChange}
          >
            <MenuItem value="reason1">Reason 1</MenuItem>
            <MenuItem value="reason2">Reason 2</MenuItem>
            <MenuItem value="reason3">Reason 3</MenuItem>
            <MenuItem value="reason4">Reason 4</MenuItem>
            <MenuItem value="reason5">Reason 5</MenuItem>
            <MenuItem value="reason6">Reason 6</MenuItem>
          </Select>
        </FormControl>

        <Grid container spacing={2} alignItems="center" className="mb-4">
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              Start Date:
            </Typography>
            <TextField
              id="start-date"
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">
              End Date:
            </Typography>
            <TextField
              id="end-date"
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" onClick={handleSubmit} className="w-full">Submit</Button>
      </div>
    </div>
  );
};

export default AddEvent;


