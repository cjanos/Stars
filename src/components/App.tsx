import { AppBar, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { AssignmentForm } from './Assignments/Form';

const App: FC = () => (
  <div>
  <AppBar position="static" style={{color:"#c91f80", backgroundColor: "#2b0945"}}>
      <Typography variant="h1">
        Good Noodles
      </Typography>
  </AppBar>
      <AssignmentForm/>
      </div>
);

export default App;