import React from "react";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {  Container, Grow, Grid, Paper, TextField, Button, Typography } from "@material-ui/core";

import useStyles from './styles';
import Form from "../Form/Form";
import Canvas from "../Canvas/canvas";

const Home = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()

    const clear = ()=>{

    }
    const handleSubmit = ()=>{

    }

    return(
        <Grow in>
            <Container className={classes.container} maxWidth="xl" >
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}  className={classes.gridContainer}>
                <Grid className={classes.grid} item xs={12} sm={6} md={9}>
                    <Form />
                </Grid>
                <Grid className={classes.grid} item xs={12} sm={6} md={9}>
                    <Canvas width={600} height={400} />
                </Grid>
            </Grid>
                
            </Container>
        </Grow>

        


        // </Container>

    );
}

export default Home;