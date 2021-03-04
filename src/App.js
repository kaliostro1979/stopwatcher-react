import React, {useContext} from 'react'
import Timer from "./components/Timer";
import Control from "./components/Control";
import {Context} from "./context/context";


function App() {
    const {timers} = useContext(Context)

    return (

        <div className="App">
                <Control/>
                {
                    timers.map((t) => {
                        return <Timer key={t}/>
                    })
                }
        </div>

    )
}

export default App;
