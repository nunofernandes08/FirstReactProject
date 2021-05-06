import React from 'react';

import logo from '../../logo.svg';
import './navbar.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const today = new Date();
  const date = today.getHours();

  return (
    <div className="makeStyles-root-1">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} className="ola" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h6" className={classes.title}>
            Table
          </Typography>
          <Button color="inherit">{date} HOURS</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
