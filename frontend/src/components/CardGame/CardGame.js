import React, {useState} from "react";
import {  Container, Grid, Typography,Card,CardContent,CardActionArea, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import MyCard from './MyCard'

const CardGame = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles()
    const cards=["AA","BB","CC"]
    const infos=["AACCC","BBCCC","CCCCC","BBCCC","CCCCC","BBCCC","CCCCC","BBCCC","CCCCC","BBCCC","CCCCC","BBCCC","CCCCC"]
    const [cardSelect, setCardSelect] = useState("")

    return(
        <Container maxWidth="xl" >
            <Grid container  spacing={3}  className={classes.gridContainer}>
                <Grid className={classes.titleGrid} item>
                    <Typography variant="h3" >Card Game Play Board</Typography>
                </Grid>
                <Grid className={classes.cardGrid} item>
                    {cards.map((card)=>(
                        <Grid key={card} item xs={12} sm={12} md={6} lg={3}>
                            <MyCard card={card} selected={cardSelect} setCardSelect={setCardSelect}/>
                        </Grid>
                    ))
                    }
                </Grid>
                <Grid className={classes.boardContainer} item>
                    <Grid className={classes.titleGrid} item>
                        <Typography variant="h4" >Console</Typography>
                        {infos.map((info, i)=>(
                            <Typography key={i} gutterBottom variant='subtitle1' >{info}</Typography>
                        ))}
                    </Grid>
                    <Grid className={classes.titleGrid} item>
                        <Typography variant="h4" >Player status</Typography>
                    </Grid>
                    <Grid className={classes.titleGrid} item>
                    <Button className={classes.Buttons} variant="contained" color="primary" >Confirm</Button>
                    </Grid>
                </Grid>
            </Grid>
                
        </Container>
        


        // </Container>

    );
}

export default CardGame;