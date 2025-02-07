import React, { useEffect, useMemo, useState } from 'react'

const Practice = () => {
    const [inputValue, setInputValue] = useState('');
    const [warningMsg, setWarningMsg] = useState(false);
    const [lengthVal, setLengthVal] = useState(0)

    const handleinputValue = (e) => {
        setInputValue(e.target.value)
        // console.log(inputValue?.length)
        // if(inputValue.length > 10){
        //     setWarningMsg('You have reached the limit')
        // }
    }

    const doubleNumber = useMemo(() => {
        if(inputValue.length > 10){
            setWarningMsg('Limit Reached')
        }
    },[inputValue])

    const handleWarningStyle = {
        backgroundColor: warningMsg ? 'green' : 'blue',
        color: warningMsg ? 'darkred' : 'green'
    }

    useEffect(() => {
        // console.log(inputValue.length === 10)
        setLengthVal(inputValue.length)
        // calcInputValue(inputValue.length)
    },[inputValue])

  return (
    <div>
        <h1>Practice Session</h1>
        <p>inputValue: {inputValue}</p>
        <p>Length of Value: {lengthVal}</p>
        <p>Double Number: {doubleNumber}</p>
        <input type='text' inputValue={inputValue} onChange={handleinputValue} style={{backgroundColor: "red"}}/>
        <button onClick={handleinputValue}>Inc+</button>
        {warningMsg && (<h1 style={handleWarningStyle}>Warning: {warningMsg}</h1>)}
    </div>
  )
}

export default Practice

const calcInputValue = (num) => {
    console.log('down-function')
    let result;
    if(num > 10){
        result = num * 2
    }
    return result
}