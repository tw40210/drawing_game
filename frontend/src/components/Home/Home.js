import React from "react";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {  Container, Grow, Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import Form from "../Form/Form";

const Home = () => {
    const user = JSON.parse(localStorage.getItem('profile'))

    const clear = ()=>{

    }
    const handleSubmit = ()=>{

    }

    return(
        <Grow in>
            <Container maxWidth="xl" >
                <Form />
                
            </Container>
        </Grow>

        


        // </Container>

    );
}

export default Home;