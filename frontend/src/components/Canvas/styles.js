import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  canvas: {
    border: "1px solid black",
    // width: "800px"
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    
  },
  radioGrid: {
    margin: '20px'
  },
  canvasGrid: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center'
    

  },
  buttonGrid: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingRight: '35px',
    paddingBottom: '12px'
  }
}));