import React, {useState} from "react";
import {  Container, Grid, Typography,Card,CardContent,CardActionArea } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

const MyCard = ({card, selected, setCardSelect}) => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()
    
    const handleOnClick=(e)=>{
        console.log(e.target.id)
        setCardSelect(card)
    }

    return(
            <Card style={{border: selected===card?"1px solid red":""}} className={classes.card} id={card}>
                <CardActionArea className={classes.cardArea} onClick={handleOnClick} >
                    <CardContent>
                        <Typography id={card} variant="h5" component="div" align="center">{card}</Typography>
                        <Typography id={card}  color="textSecondary" align="center">Description</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    );
}

export default MyCard;