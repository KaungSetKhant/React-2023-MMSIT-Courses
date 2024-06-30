import React, { createContext, useState } from 'react'

export const StateContext = createContext()

export const StateContextProvider = ({children}) => {
   
   
    const [count,setCount] = useState(0)
    const data = {count,setCount}

    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}