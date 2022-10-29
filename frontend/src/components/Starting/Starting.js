import React, {useState} from "react";
// import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {  Container, Grow, Grid, Button, TextField, Typography} from "@material-ui/core";
import { SimpleCheck, SimpleStart, SimpleReset, SimpleJoin } from "../../api";
import { startGame, joinGame } from "../../actions/game";

import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Starting = () => {
    // const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [playerName, setPlayerName] = useState('')

    function sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const handleJoin=async () =>{
        dispatch(joinGame(playerName))
        // let obj =await SimpleJoin(playerName);
        // console.log(obj);
        await handleCheck();
    }

    const handleCheck= async () =>{
        

        // console.log("This is SimpleJoin: ", obj)
        let obj = await SimpleCheck();
        while(!obj.data.status){
            console.log("This is SimpleJoin: ", obj.data.status)
            obj = await SimpleCheck();
            await sleep(1000);
            // console.log("This is SimpleJoin: ", obj.data.status)
        }
        console.log("This is SimpleJoin: ", obj.data.status)
        dispatch(startGame());
        navigate(`/PicGame`);
        // Navigate
    }

    const handleStart= async () =>{
        dispatch(startGame());
        

        // const {status} = await SimpleStart()
        // console.log("This is SimpleStart: ", status)
    }

    const handleReset= async () =>{
        const {status} = await SimpleReset()
        console.log("This is SimpleReset: ", status)
    }



    return(
        <Grow in>
            <Container maxWidth="xl" >
            <Grid container  spacing={3}  className={classes.gridContainer}>
                <Grid className={classes.grid} item xs={12} sm={6} md={4}>
                    <Typography variant="h6">{"Player Name"}</Typography>
                    <TextField name="playerName" variant="outlined" label="PlayerName" fullWidth value={playerName} onChange={(e)=>{setPlayerName(e.target.value)}}/>
                </Grid>
                <Grid className={classes.grid} item xs={12} sm={6} md={4}>
                    <Button className={classes.Buttons} variant="contained" color="primary" onClick={handleStart}>Start</Button>
                    <Button className={classes.Buttons} variant="contained" color="secondary" onClick={handleJoin}>Join</Button>
                    <Button className={classes.Buttons} variant="contained" color="secondary" onClick={handleReset}>Reset</Button>
                </Grid>
            </Grid>
                
            </Container>
        </Grow>

        


        // </Container>

    );
}

export default Starting;