import {filterType, MoneyType} from "../App";

export type MoneyTypeProps = {
    currentMoneys: MoneyType[]
    onClickFilterHandler: (nameButton: filterType) => void
}

export const MoneyComponent = ({currentMoneys, onClickFilterHandler}: MoneyTypeProps) => {
    return (
        <div>
            <ul>
                {currentMoneys.map((money, index) => {
                    return (
                        <li key={index}>
                            <span> {money.banknots}</span>
                            <span> {money.value}</span>
                            <span> {money.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler("All")}>All</button>
                <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </div>
    );
};

