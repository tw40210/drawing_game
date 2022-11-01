import React from "react";
import {  Container, Grow, Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import Canvas from "../Canvas/canvas";

const PicGame = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()


    return(
        <Grow in>
            <Container maxWidth="xl" >
            <Grid container  spacing={3}  className={classes.gridContainer}>
                <Grid className={classes.grid} item xs={12} sm={6} md={4}>
                    <Canvas width={600} height={400} />
                </Grid>
            </Grid>
                
            </Container>
        </Grow>


        // </Container>

    );
}

export default PicGame;