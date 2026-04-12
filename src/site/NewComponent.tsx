export type StudentType = {
    id: number
    name: string
    age: number
    major: string
}

export type NewComponentType = {
    students: StudentType[]
}

export const NewComponent = ({students}: NewComponentType) => {
    return (
        <div>
            <ul>
            {students.map(student => {
                return (
                    <li key={student.id}>
                        <span>{student.name} </span>
                        <span>{student.age} </span>
                        <span>{student.major} </span>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

