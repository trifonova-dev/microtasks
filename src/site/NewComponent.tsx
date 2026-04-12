export type StudentType = {
    id: string
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
                        <span>age: {student.age} </span>
                        <span>major: {student.major} </span>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

