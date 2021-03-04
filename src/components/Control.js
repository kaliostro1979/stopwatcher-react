import React, { useContext, useState} from 'react'
import {Context} from "../context/context";

const Control = ()=>{

    const { handleNum } = useContext(Context)

    const [timersNum, setTimersNum] = useState(1)


    function handleNumChange(event){
        setTimersNum(event.target.value)
    }


    return (
        <div className="control">
            <div className="timers-quantity">
                    <input type="number" value={timersNum} onChange={handleNumChange}/>
                    <button onClick={ ()=>{handleNum(timersNum)}}>Set</button>
            </div>
        </div>
    )
}

export default Control