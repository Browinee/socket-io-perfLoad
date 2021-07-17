import React, { useState, useEffect} from 'react';
import './App.css';
import socket from './utilities/socketConnection';
import Widget from './component/widget';


function App() {
    const [performanceData, setPerf] = useState({});
    useEffect(() => {
        socket.on('data', (data) => {
            setPerf((prevPerf) => {
                return {
                    ...prevPerf,
                    [data.macA]: data
                }
            });
        })
    }, []);
    return (
        <div className="App">
            {
                Object.entries(performanceData).map(([key, value], index) => {
                    return <Widget key={key} data={value}/>
                })
            }
        </div>
    );
}


export default App;
