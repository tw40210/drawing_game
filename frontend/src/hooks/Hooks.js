import {useRef} from "react";

export const useOnDraw = (onDraw)=>{
    const canvasRef = useRef(null);

    const setCanvasRef = (ref)=>{
        if (!ref) return;
        canvasRef.current = ref;
        initMouseListener();
    }

    const getCanvasPoint = (clientX, clientY) =>{
        if (!canvasRef.current) return;

        const boundingRect = canvasRef.current.getBoundingClientRect();
        return{
            x: clientX - boundingRect.left,
            y: clientY - boundingRect.top
        }
    }

    const initMouseListener = ( ) =>{
        const mouseMoveListener = (e) => {
            const point = getCanvasPoint(e.clientX, e.clientY);
            const ctx = canvasRef.current.getContext('2d');
            if (onDraw) onDraw(ctx, point);
            console.log({x: point.x, y: point.y});
        }

        window.addEventListener("mousemove", mouseMoveListener)
    }


    return setCanvasRef;
}