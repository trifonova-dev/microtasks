import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent, StudentType} from "./site/NewComponent";
import {v4 as uuidv4} from 'uuid';
import {ComponentCars} from "./site/ComponentCars";

function App() {

    const students: StudentType[] = [
        {id: uuidv4(), name: "James Wilson", age: 20, major: "Computer Science"},
        {id: uuidv4(), name: "Emma Thompson", age: 19, major: "Biology"},
        {id: uuidv4(), name: "Liam O'Connor", age: 22, major: "Economics"},
        {id: uuidv4(), name: "Sophia Garcia", age: 21, major: "Psychology"},
        {id: uuidv4(), name: "Noah Miller", age: 18, major: "Engineering"},
        {id: uuidv4(), name: "Olivia Smith", age: 23, major: "Graphic Design"},
        {id: uuidv4(), name: "Ethan Davis", age: 20, major: "History"},
        {id: uuidv4(), name: "Ava Martinez", age: 19, major: "Physics"},
        {id: uuidv4(), name: "Mason Brown", age: 24, major: "Political Science"},
        {id: uuidv4(), name: "Isabella Clark", age: 21, major: "Mathematics"},
        {id: uuidv4(), name: "Liam O'Connor", age: 22, major: "Economics"},
        {id: uuidv4(), name: "Sophia Garcia", age: 21, major: "Psychology"},
        {id: uuidv4(), name: "Noah Miller", age: 18, major: "Engineering"},
        {id: uuidv4(), name: "Olivia Smith", age: 23, major: "Graphic Design"},
        {id: uuidv4(), name: "Ethan Davis", age: 20, major: "History"},
        {id: uuidv4(), name: "Ava Martinez", age: 19, major: "Physics"},
        {id: uuidv4(), name: "Mason Brown", age: 24, major: "Political Science"},
        {id: uuidv4(), name: "Isabella Clark", age: 21, major: "Mathematics"}

    ]
    return (
        <div className="App">
            <Header title={"Header Title"}/>
            <Body titleForBody={"Body Title"}/>
            <Footer titleForFooter={"Footer Title"}/>
            <NewComponent students={students}/>
            <ComponentCars />
        </div>
    );
}

export default App;
