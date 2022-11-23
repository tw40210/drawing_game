import { makeStyles } from '@material-ui/core/styles';

const gridObj = {
  margin: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export default makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  grid: gridObj,
  titleGrid:{
    ...gridObj, 
    margin: '15px',
  },
  labelGrid:{
    ...gridObj, 
    width: '90%',
    alignItems: 'flex-start',
    color: 'red'
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px'
  },

}));