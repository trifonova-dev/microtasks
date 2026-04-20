import {ChangeEvent} from "react";

export type InputType = {
    title: string
    setTitle: (title:string) => void
}

export const Input = ({title, setTitle}:InputType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        title = (event.currentTarget.value)
        setTitle(title)
    }
    return (
        <input
            value={title}
            onChange={onChangeInputHandler}
        />
    );
};

