// export type CarType = {
//     manufacturer: string
//     model: string
// }
//
// export type ComponentType = {
//     topCars: CarType[]
// }

//Если массив находится внутри компоненты, то пропсы не нужны!!!!


export const ComponentCars = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    return (
        <table>
            <thead>
            <tr>
                <th>Производитель</th>
                <th>Модель</th>
            </tr>
            </thead>
            <tbody>
            {topCars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>

    )

}
