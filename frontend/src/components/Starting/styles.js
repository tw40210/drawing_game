import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '800px',
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px'
  },

  buttonRow: {
    display: 'flex',
    justifyContent: 'center'
  },

  room:{
    marginBottom: '20px'
  }

}));