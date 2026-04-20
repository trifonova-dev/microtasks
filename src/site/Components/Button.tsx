export type ButtonType = {
    title: string
    callback: () => void
}

export const Button = ({title, callback}: ButtonType) => {
    const onClickButtonHandler = () => {
        callback();
    }
    return (
        <button onClick={onClickButtonHandler}>
            {title}
        </button>
    );
};

