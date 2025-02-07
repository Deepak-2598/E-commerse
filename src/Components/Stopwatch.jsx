import React, { useRef, useState } from 'react';

function Stopwatch(){
  // const { timer } = useTimer(0);

  // const useTimer = (initialState = 0) => {
  //   const [timer, setTimer] = useState(initialState);

  //   return { timer }
  // }

  const formatTime = (timer) => {
    const getSeconds = `0${(timer % 60)}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds} `
  }

  const useTimer = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIspaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
      setIsActive(true)
      setIspaused(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      },100)
    }

    const handlePause = () => {
      clearInterval(countRef.current)
      setIspaused(false)
    }

    const handleResume = () => {
      setIspaused(true)
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 100)
    }

    const handleReset = () => {
      clearInterval(countRef.current)
      setIsActive(false)
      setIspaused(false)
      setTimer(0)
    }

    return { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset }
  }

  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return(
    <div className='stopwatch'>
      <h1>Stopwatch</h1>
      <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
          !isActive && !isPaused ? 
            <button onClick={handleStart}>Start</button>
            : (
              isPaused ? <button onClick={handlePause}>Pause</button> : 
              <button onClick={handleResume}>Resume</button>
            )
          }{' '}
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Stopwatch;