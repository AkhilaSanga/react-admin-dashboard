import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Admin Dashboard
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/tables">
          Tables
        </Button>
        <Button color="inherit" component={Link} to="/kanban">
          Kanban
        </Button>
        <Button color="inherit" component={Link} to="/form">
          Form
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
