import React, { createContext, useContext, useState } from 'react'
// import ChildContextApi from './ChildContextApi'

const CreateContext = createContext('Initial Value')

const ContextApi = () => {
    const [value, setValue] = useState('Deepak')
    
  return (
    <div>
        <h1>ContextApi</h1>
        <CreateContext.Provider value={value}>
            <ChildContextApi />
            <button onClick={() => setValue('DeepakShaw')}>Click me</button>
        </CreateContext.Provider>

    </div>
  )
}

function ChildContextApi(){
    const valueFromContext = useContext(CreateContext)
    
    return (
    <>
        <h1>{valueFromContext}</h1>
    </>
    
)

}

export default ContextApi