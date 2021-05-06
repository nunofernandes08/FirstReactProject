import React from 'react';

import logo from '../../logo.svg';
import './navbar.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },

  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const today = new Date();
  const date = today.getHours();

  return (
    <div className="makeStyles-root-1">
      <AppBar position="static" >
        <Toolbar>
          <div class="navbar">
            <div class="left">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

              <img src={logo} className="App-logo" alt="logo" />

              <Typography variant="h6" className={classes.title}>
                Table
              </Typography>
            </div>

            <div class="center">
              <InputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </div>

            <div class="right">
              <h3 color="inherit">{date} HOURS</h3>
            </div>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}