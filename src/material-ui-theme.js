import { createMuiTheme } from '@material-ui/core/styles'

const Color = {
  // By role
  primary: '#FFFFFF',
  secondary: '#EFF6FF',
  success: '#02B917',
  error: '#D0021B',
  warning: '#FFEAEA',
  clear: 'rgba(0,0,0,0)',
  overlay: 'rgba(51,51,51,0.7)',
  fadedPrime: 'rgba(0,10,92,0.7)',
  fadedBlack: 'rgba(0,0,0,0.7)',
  hover: 'rgba(0,0,0,0.05)',
  // By color
  black: '#000000',
  cornflower: '#488DF7',
  mineshaft: '#333333',
  tundora: '#4A4A4A',
  manatee: '#8D97AA',
  hawaiian: '#8F6014',
  dusty: '#9B9B9B',
  sunken: '#616161',
  monza: '#D0021B',
  alto: '#D9D9D9',
  mercury: '#F3F3F3',
  gallery: '#F0F0F0',
  buttercup: '#F5A623',
  buttercup2: '#F5A623',
  eggSour: '#FFF3DE',
  snow: '#FFFFFF',
  paleSky: '#6C7381',
  amaranth: '#EB3A58',
  celery: '#A4C354',
}


const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.primary,
    },
    secondary: {
      main: Color.secondary,
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export default theme;
