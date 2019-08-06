// @vendors
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/styles';
import CustomIcon from '../custom-icon'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  }
}));

function ButtonAppBar() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow} />
          <IconButton aria-label="delete">
            <CustomIcon iconName='bell' />
          </IconButton>
          <IconButton aria-label="delete">
            <CustomIcon iconName='search' />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default ButtonAppBar;
