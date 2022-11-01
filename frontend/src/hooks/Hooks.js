import {useEffect, useRef} from "react";


export const useCanvas = (onDraw, canvasRef)=>{
    const isDrawingRef = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    useEffect(() =>{
        return ()=> {
            if (mouseMoveListenerRef.current) window.removeEventListener("mousemove", mouseMoveListenerRef.current);
            if (mouseUpListenerRef.current) window.removeEventListener("mouseup", mouseUpListenerRef.current);
        }

    }, [])
    
    const setCanvasRef = (ref)=>{
        if (!ref) return;
        if (canvasRef.current) canvasRef.current.removeEventListener("mousedown", mouseDownListenerRef.current)
        canvasRef.current = ref;
        initMouseListener();
        initMouseDownListener();
        initMouseUpListener();
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
            if (isDrawingRef.current){
                const point = getCanvasPoint(e.clientX, e.clientY);
                const ctx = canvasRef.current.getContext('2d');
                prevPointRef.current = prevPointRef.current ?? point;
                if (onDraw) onDraw(ctx, point, prevPointRef.current);
                prevPointRef.current = point;
            }
        }
        mouseMoveListenerRef.current = mouseMoveListener
        window.addEventListener("mousemove", mouseMoveListener)
    }

    const initMouseDownListener = ( ) => {
        const listener = () => {
            if (!canvasRef.current) return;
            isDrawingRef.current = true;
        }
        
        mouseDownListenerRef.current = listener
        canvasRef.current.addEventListener("mousedown", listener)
    }

    const initMouseUpListener = ( ) => {
        const listener = () => {
            if (!canvasRef.current) return;
            isDrawingRef.current = false;
            prevPointRef.current = null;
        }

        mouseUpListenerRef.current = listener
        window.addEventListener("mouseup", listener)
    }

    
    return setCanvasRef;
}
