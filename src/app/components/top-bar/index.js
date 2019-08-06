// @vendors
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';

import CustomIcon from '../custom-icon'

const useStyles = makeStyles(theme => ({
  fontSizeSmall: {
    fontSize: 10
  },
  grow: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />
          <IconButton aria-label="delete">
            <CustomIcon />
          </IconButton>
          <IconButton aria-label="" color="inherit" size='medium'>
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
