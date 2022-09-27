import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {  Container, Grow, Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import BackupIcon from '@mui/icons-material/Backup';
import useStyles from './styles';
import {newTransition} from '../../constances/types'

const Form = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    const [tansition, setTransition]  = useState(newTransition)
    const [csvData, setCsvData] = useState([]);
    const [filename, setFilename] = useState("");

    const handleFileUpload = (e) => {
        if (!e.target.files) {
        return;
        }
        const file = e.target.files[0];
        console.log(e.target.files)
        const { name } = file;
        setFilename(name);
        setCsvData([...csvData, file]);
        console.log(csvData)
    };


    const clear = ()=>{
        console.log(tansition)
    }
    const handleSubmit = ()=>{
        console.log(tansition)
    }

    return(

            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}  className={classes.root}>
                <Paper elevation={6} className={classes.paper}>
                    <form autoComplete="off" noValidate  onSubmit={handleSubmit} className={classes.form}>
                        <Typography variant="h6"> Transition Data </Typography>
                        <TextField name="title" variant="outlined" label="Title" fullWidth value={tansition.title} onChange={(e)=>{setTransition({...tansition, title: e.target.value})}}/>                            
                        <TextField name="time" variant="outlined" label="Time" fullWidth value={tansition.time} onChange={(e)=>{setTransition({...tansition, time: e.target.value})}}/>                            
                        <TextField name="amount" variant="outlined" label="Amount" fullWidth value={tansition.amount} onChange={(e)=>{setTransition({...tansition, amount: parseInt(e.target.value)})}}/>                            
                        <Button  variant="contained" color="primary" size="large" type="submit" fullWidth  className={classes.buttonSubmit}>Submit</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth className={classes.buttonSubmit}>Clear</Button>
                        <Button component="label" variant="outlined" startIcon={<BackupIcon />} sx={{ marginRight: "1rem" }}>  Upload CSV
                          <input type="file" accept=".csv" hidden onChange={handleFileUpload} />
                        </Button>
                    </form>
                </Paper>
            </Grid>


        


        // </Container>

    );
}

export default Form;