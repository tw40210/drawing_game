import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from "./components/Home/Home";
import Starting from "./components/Starting/Starting";
import PicGame from "./components/PicGame/PicGame";


const App = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    return(
        <BrowserRouter>
            <Container maxWidth='xl'>
                <Routes>
                    <Route path='/' exact element={<Starting/>}></Route>
                    <Route path='/PicGame' exact element={<PicGame/>}></Route>
                </Routes>
            </Container>
        </BrowserRouter>

        


        // </Container>

    );
}

export default App;