import React, {useEffect, useMemo, useRef, useState} from 'react'

const Timer = () => {
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [mlsec, setMlsec] = useState(0)
    const [isStarted, setIsStarted] = useState(false)

    let minInput = useRef(null);
    let secInput = useRef(null);
    let mlsecInput = useRef(null);

    let startBtn = useRef(null)
    let stopBtn = useRef(null)
    let pauseBtn = useRef(null)




    useEffect(() => {
        if (isStarted === true) {
            const interval = setInterval(() => {
                setMlsec(++mlsecInput.current.value)
                if (mlsec === 99) {
                    setSec(++secInput.current.value)
                    setMlsec(0)
                }
                if (sec === 59){
                    setSec(0)
                    setMin(++minInput.current.value)
                }

            }, 10)

            return () => clearInterval(interval)
        }

    }, [isStarted, mlsec, sec, min])



    function startHandler() {
        setIsStarted(true)
        startBtn.current.disabled = true
        stopBtn.current.disabled = false
        pauseBtn.current.disabled = false
    }

    function stopHandler() {
        setIsStarted(false)
        setMlsec(0)
        setSec(0)
        setMin(0)
        startBtn.current.disabled = false
        stopBtn.current.disabled = true
        pauseBtn.current.disabled = true
    }

    function pauseHandler() {
        setIsStarted(false)
        startBtn.current.disabled = false
        stopBtn.current.disabled = false
        pauseBtn.current.disabled = true
    }


    return (
        <div className="timer">
            <div className="inputs">
                <input type="text" className="min" value={min < 10 ? '0' + min : min} disabled ref={minInput}/>
                <input type="text" className="sec" value={sec < 10 ? '0' + sec : sec} disabled ref={secInput}/>
                <input type="text" className="mlsec" value={mlsec < 10 ? '0' + mlsec : mlsec} disabled ref={mlsecInput}/>
            </div>
            <div className="buttons">
                <button className="start" onClick={startHandler} ref={startBtn} >Start</button>
                <button className="stop" onClick={stopHandler} ref={stopBtn} >Stop</button>
                <button className="pause" onClick={pauseHandler} ref={pauseBtn} >Pause</button>
            </div>
        </div>
    )
}

export default Timer