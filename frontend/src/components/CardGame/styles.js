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
  cardGrid:{
    ...gridObj, 
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  card:{
    width: '150px',
    // height: '150px',
    margin: '5px'
  },
  Buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px'
  },
  boardContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  }

}));