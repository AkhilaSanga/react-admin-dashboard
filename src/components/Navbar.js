import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
        <Button color="inherit" component={Link} to="/kanban">Kanban</Button>
        <Button color="inherit" component={Link} to="/tables">Tables</Button>
        <Button color="inherit" component={Link} to="/charts">Charts</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
