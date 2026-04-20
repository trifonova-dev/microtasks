import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./site/Components/FullInput";


function App() {

    const [message, setMessage] = useState([
        {message: "Hello World!"},
        {message: "Hello Money!"},
        {message: "Hello Me!"},
    ]);

    const addTitle = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }
    return (
        <div className={"App"}>
            <FullInput
                addTitle={addTitle}
            />
            <div>
                {message.map((el, index) => {
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default App;
