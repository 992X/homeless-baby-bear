import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";


export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  
  const [fromDate, setFromDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [toDate, setToDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  function handleSubmit(event){
    event.preventDefault();
  };

  const handleDateChange_from = date => {
    setFromDate(date);
  };

  const handleDateChange_to = date => {
    setToDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} value={{from : fromDate, to: toDate}}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From Date"
          value={fromDate}
          onChange={handleDateChange_from}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="To Date"
          value={toDate}
          onChange={handleDateChange_to}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <button onClick={(e) => props.func(fromDate, toDate)}>search</button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
