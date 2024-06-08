import React, { useState, useEffect, useRef } from "react";

export default function StopWatch () {

    const[isRunning, setIsRunning] = useState(false);
    const[elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);


    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime /(1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let millisecs = Math.floor(elapsedTime % 1000 / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        millisecs = String(millisecs).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${millisecs}`;
    }

    return(
        <div className="container">
            <h1>{ formatTime() }</h1>
            <div className="buttons">
                <button onClick={ start }>Start</button>
                <button onClick={ stop }>Stop</button>
                <button onClick={ reset }>Reset</button>
            </div>
        </div>
    );
}