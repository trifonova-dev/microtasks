import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./site/Components/FullInput";
import {Input} from "./site/Components/Input";
import {Button} from "./site/Components/Button";
import {serialize} from "node:v8";


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

    const [title, setTitle] = useState("")

    const callbackButtonHandler = ()=>{
        addTitle(title);
        setTitle("")
    }


    return (
        <div className={"App"}>
            {/*<FullInput*/}
            {/*    addTitle={addTitle}*/}
            {/*/>*/}
            <Input
                title={title}
                setTitle={setTitle}/>
            <Button
                title={"Personality Button"}
                callback={callbackButtonHandler}
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
