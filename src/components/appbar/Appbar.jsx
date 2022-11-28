import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography,  } from '@mui/material';

const Appbar = ({ drawerWidth }) => {
  return (
    <>
     <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Crypto dashboard
            </Link>
          </Typography>
        </Toolbar>
      </AppBar> 
    </>
  );
};

export default Appbar;