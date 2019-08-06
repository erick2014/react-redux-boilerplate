// @vendors
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types'

// @components
import Icons from '../../themes/icons';

const useStyles = makeStyles(theme => ({
  root: props => ({
    fontSize: props.fontSize ? props.fontSize : '1.5rem'
  }),
}));

const CustomIcon = (props) => {
  let viewBoxWidth = 0;
  let viewBoxHeight = 0;
  let svgPath = '';

  const classes = useStyles(props)
  const svgIconConfig = Icons[props.iconName];

  if (svgIconConfig) {
    viewBoxWidth = svgIconConfig.viewBoxWidth;
    viewBoxHeight = svgIconConfig.viewBoxHeight;
    svgPath = svgIconConfig.iconPath;
  }

  return (
    <SvgIcon color={'inherit'} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} classes={{ root: classes.root }}>
      <path d={svgPath} />
    </SvgIcon>
  )
}

CustomIcon.defaultProps = {
  iconName: ''
}

CustomIcon.propTypes = {
  iconName: PropTypes.string,
}

export default CustomIcon;
