import React from "react";
import {  Container, Grow, Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import Canvas from "../Canvas/canvas";

const PicGame = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()


    return(
        <Container maxWidth="xl" >
            <Grid container  spacing={3}  className={classes.gridContainer}>
                <Grid className={classes.titleGrid} item>
                    <Typography variant="h3" >Play Board</Typography>
                </Grid>
                <Grid className={classes.grid} item >
                    <Canvas width={600} height={400} />
                </Grid>
                <Grid className={classes.labelGrid} item >
                    <Typography fullWidth>Label:</Typography>
                </Grid>
            </Grid>
                
        </Container>
        


        // </Container>

    );
}

export default PicGame;