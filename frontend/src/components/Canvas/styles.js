import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  canvas: {
    border: "1px solid black",
    // width: "800px"
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  radioGrid: {
    margin: '20px'
  },
  canvasGrid: {
    margin: '20px',
    

  }
}));