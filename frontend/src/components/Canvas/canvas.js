import React, { useRef, useEffect} from "react";
import {   Grow, Grid, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { useCanvas } from "../../hooks/Hooks";
import useStyles from './styles';
import RadioButtonsGroup from "./radioGroup";
import { updatePicGame } from "../../actions/game";

const Canvas = ({width, height}) => {
    const classes = useStyles();
    const game = useSelector((state) => state.game);
    const canvasRef = useRef(null);
    const dispatch = useDispatch();

    let img = new Image();
    img.onload = function () {
        canvasRef.current.getContext('2d').clearRect(0, 0, width, height);
        canvasRef.current.getContext('2d').drawImage(img, 0, 0, width, height);
    };

    const canvasName = "canvasImg";

    useEffect(() => {
        if (game.stat) {
            const idx =(game.id + 1)%game.stat.players.length;
            
            if (game.stat.pics[idx]!==''){
                img.src=game.stat.pics[idx];
            }
        }
      }, [game])

    const onDraw = (ctx, point, prevPoint) =>{
        drawLine(point, prevPoint, 5, "#000000", ctx);
    }

    const drawLine = (start, end, width, color, ctx)=>{
        start = start ?? end;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2*Math.PI);
        ctx.fill();

    }

    const setCanvasRef = useCanvas(onDraw, canvasRef)

    const handleSubmit = ()=>{
        localStorage.setItem(canvasName, canvasRef.current.toDataURL());
        const encodedUrl = encodeURIComponent(canvasRef.current.toDataURL())
        dispatch(updatePicGame(game.stat.round, 0, game.playerName, encodedUrl))
    };

    return (
        <Paper width="50%">
            <Grid container spacing={3} wrap="nowrap"  className={classes.gridContainer}>
                <Grid className={classes.radioGrid} item >
                    <RadioButtonsGroup />
                </Grid>
                <Grid className={classes.canvasGrid} item >
                    <canvas width={`${width}px`} height={`${height}px`} className={classes.canvas} ref={setCanvasRef}/>
                    
                </Grid>
                <Grid className={classes.buttonGrid} >
                    <Button style = {{marginLeft: 'auto'}} onClick={handleSubmit} variant="contained" color="primary">Submit</Button>
                </Grid>
                

            </Grid>
        </Paper>
    )
}

export default Canvas;