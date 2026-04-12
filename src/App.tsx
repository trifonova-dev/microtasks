import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent, StudentType} from "./site/NewComponent";

function App() {

    const students:StudentType[] = [
        {id: 1, name: "James Wilson", age: 20, major: "Computer Science"},
        {id: 2, name: "Emma Thompson", age: 19, major: "Biology"},
        {id: 3, name: "Liam O'Connor", age: 22, major: "Economics"},
        {id: 4, name: "Sophia Garcia", age: 21, major: "Psychology"},
        {id: 5, name: "Noah Miller", age: 18, major: "Engineering"},
        {id: 6, name: "Olivia Smith", age: 23, major: "Graphic Design"},
        {id: 7, name: "Ethan Davis", age: 20, major: "History"},
        {id: 8, name: "Ava Martinez", age: 19, major: "Physics"},
        {id: 9, name: "Mason Brown", age: 24, major: "Political Science"},
        {id: 10, name: "Isabella Clark", age: 21, major: "Mathematics"}

    ]
    return (
        <div className="App">
            <Header title={"Header Title"}/>
            <Body titleForBody={"Body Title"}/>
            <Footer titleForFooter={"Footer Title"}/>
            <NewComponent students={students}/>
        </div>
    );
}

export default App;
