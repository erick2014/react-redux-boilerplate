import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  colorPrimary: {
    backgroundColor: '#FFF'
  },
  // root: {
  //   backgroundColor: '#FFF'
  // }
});


export default function ButtonAppBar() {
  const classes = useStyles()
  return (
    <div className={classes.root} >
      <AppBar position="static" classes={{ colorPrimary: classes.colorPrimary }} >
        <Toolbar>
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  )
}
