import React, { useRef} from "react";
import useStyles from './styles';
import { useCanvas } from "../../hooks/Hooks";
import {   Grow, Grid, Paper, Button } from "@material-ui/core";

const Canvas = ({width, height}) => {
    const classes = useStyles();
    const canvasRef = useRef(null);
    let img = new Image();
    img.onload = function () {
        canvasRef.current.getContext('2d').clearRect(0, 0, width, height);
        canvasRef.current.getContext('2d').drawImage(img, 0, 0, width, height);
    };

    const canvasName = "canvasImg";

    const onDraw = (ctx, point, prevPoint) =>{
        // console.log(point, prevPoint);
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
    const handleSaveCtx = ()=>{
        localStorage.setItem("canvasImg", canvasRef.current.toDataURL());
    };

    const handleSubmit = ()=>{
        localStorage.setItem("canvasImg", canvasRef.current.toDataURL());
    };

    const handleLoadCtx = ()=>{
        const dataURL = localStorage.getItem(canvasName);
        img.src = dataURL;

    };
    
    return (
        <Paper>
            <Grow in>
                <Grid container justifyContent="space-between"  spacing={3}  className={classes.gridContainer}>
                    <Grid className={classes.grid} item >
                        <canvas width={`${width}px`} height={`${height}px`} className={classes.canvas} ref={setCanvasRef}/>
                    </Grid>
                    <Grid className={classes.grid} item >
                        <Button onClick={handleSaveCtx}>SAVE</Button>
                    </Grid>
                    <Grid className={classes.grid} item >
                        <Button onClick={handleLoadCtx}>LOAD</Button>
                    </Grid>
                </Grid>
            </Grow>
        </Paper>
        


    )
}

export default Canvas;