// @vendors
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: props => ({
    fontSize: props.fontSize ? props.fontSize : '1.5rem'
  }),
}));

const CustomIcon = (props) => {
  const classes = useStyles(props)
  return (
    <SvgIcon color={'inherit'} viewBox={`0 0 448 512`} classes={{ root: classes.root }}>
      <path d='M433.884 366.059C411.634 343.809 384 316.118 384 208c0-79.394-57.831-145.269-133.663-157.83A31.845 31.845 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32c0 6.75 2.095 13.008 5.663 18.17C121.831 62.731 64 128.606 64 208c0 108.118-27.643 135.809-49.893 158.059C-16.042 396.208 5.325 448 48.048 448H160c0 35.29 28.71 64 64 64s64-28.71 64-64h111.943c42.638 0 64.151-51.731 33.941-81.941zM224 480c-17.645 0-32-14.355-32-32h64c0 17.645-14.355 32-32 32zm175.943-64H48.048c-14.223 0-21.331-17.296-11.314-27.314C71.585 353.836 96 314.825 96 208c0-70.741 57.249-128 128-128 70.74 0 128 57.249 128 128 0 106.419 24.206 145.635 59.257 180.686C421.314 398.744 414.11 416 399.943 416z' />
    </SvgIcon>
  )
}

export default CustomIcon;
