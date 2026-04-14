import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent, StudentType} from "./site/NewComponent";
import {v4 as uuidv4} from 'uuid';
import {ComponentCars} from "./site/ComponentCars";
import {MoneyComponent} from "./site/MoneyComponent";

export type MoneyType = {
    banknots: string
    value: number
    number: string
}

export type filterType = "All" | "RUBLS" | 'Dollars'

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

    const [a, setA] = useState(1);
    const onClickHandler = () => {
        setA(a + 1);
        console.log(a);
    }
    const onClickResetHandler = () => {
        setA(0);
        console.log(a);
    }

    const [moneys, setMoneys] = useState<MoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    // //currentMoneys это все деньги в массиве moneys
    // let currentMoneys = moneys;
    //
    // //если currentMoneys==='RUBLS' то отрисуй только обьекты со свойством рубли
    // currentMoneys = moneys.filter(m => m.banknots === 'RUBLS');
    //
    // //если currentMoneys==='Dollars' то отрисуй все обьекты со свойством доллары
    // currentMoneys= moneys.filter(m=>m.banknots === 'Dollars');

    const [nameButton, setNameButton] = useState<filterType>("All")

    let currentMoneys = moneys
    if (nameButton === 'RUBLS') {
        currentMoneys = moneys.filter(m => m.banknots === 'RUBLS')
    }

    if (nameButton === 'Dollars') {
        currentMoneys = moneys.filter(m => m.banknots === 'Dollars')
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setNameButton(nameButton)
    }


    return (
        <div className="App">
            <Header title={"Header Title"}/>
            <Body titleForBody={"Body Title"}/>
            <Footer titleForFooter={"Footer Title"}/>
            <NewComponent students={students}/>
            <ComponentCars/>
            <button onClick={onClickHandler}>Button</button>
            <button onClick={onClickResetHandler}>0</button>
            <MoneyComponent
                currentMoneys={currentMoneys}
                onClickFilterHandler={onClickFilterHandler}/>
        </div>
    );
}

export default App;
