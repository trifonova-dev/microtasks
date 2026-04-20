import {ChangeEvent, useState} from "react";

export type FullInputType = {
    addTitle: (title: string) => void
}
export const FullInput = ({addTitle}: FullInputType) => {
    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        title = (event.currentTarget.value)
        setTitle(title)
    }

    const onClickButtonHandler = () => {
        addTitle(title)
        setTitle("")
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

