import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '800px'
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px'
  },

}));