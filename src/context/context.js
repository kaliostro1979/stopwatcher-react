import React, {useEffect, useMemo, useState} from 'react'

export const Context = React.createContext()

export const Provider = ({children})=>{

    const [num, setNum] = useState(1)
    const [timers, setTimers] = useState([])
    let timersArray = []



    useEffect(()=>{
        for (let i = 0; i < num; i++){
            timersArray.push('timer' + i)
        }
        setTimers(timersArray)
    },[num])


    function handleNum (number){
        setNum(+number)
    }




    return(
        <Context.Provider value={{ timers, handleNum, num}}>
            {children}
        </Context.Provider>
    )
}
