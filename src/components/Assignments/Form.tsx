import React from "react";
import { Paper, TextField, Typography } from "@material-ui/core";
import  moment from "moment";
import { useStyles } from "./formStyles";
import { StarIcon } from "../icons";

/**
 * Assignment edit form.
 */
export const AssignmentForm: React.FunctionComponent = () => {
   const classes = useStyles();

   return ( 
      <div className={classes.background}>
      <form className={classes.container}>
   <Paper className={classes.paper}>
      <Typography variant="h6">
         Gotta Get Them Golden Stars
         <StarIcon/>
         </Typography>
      
        <TextField required label="Assignment title" variant="outlined"/>
        <TextField
    id="date"
    label="Due Date"
    type="date"
    defaultValue={moment.now()}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
    </Paper>
    </form>
    </div>
   );
}