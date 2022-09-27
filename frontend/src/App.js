import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home/Home";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return(
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' exact element={<Home/>}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        


        // </Container>

    );
}

export default App;