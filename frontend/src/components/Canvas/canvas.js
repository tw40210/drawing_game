import React from "react";
import useStyles from './styles';
import { useOnDraw } from "../../hooks/Hooks";

const Canvas = ({width, height}) => {
    const classes = useStyles()
    const onDraw = (ctx, point) =>{
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, 2*Math.PI);
        ctx.fill();

    }


    const setCanvasRef = useOnDraw(onDraw)
    return (
        <canvas
            width={`${width}px`}
            height={`${height}px`}
            className={classes.canvas}
            ref={setCanvasRef}
            
        />

    )
}

export default Canvas;