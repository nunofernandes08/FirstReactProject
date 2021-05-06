import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import './buttons.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <div class="floatButtons"> 
        <div class="button">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        <div class="button">
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          </div>
          <div class="button">
            <Fab variant="extended">
              <NavigationIcon className={classes.extendedIcon} />
              Navigate
            </Fab>
          </div>
          <div class="button">
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab>
          </div>
      </div>
    </div>
  );
}
