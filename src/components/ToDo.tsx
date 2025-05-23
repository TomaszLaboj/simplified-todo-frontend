import './Task.css';

export interface ToDoInterface {
    title: string;
    isDone: string;
}

const ToDo  = ({title, isDone}: ToDoInterface)=> {
    return (
        <>
            <div className="card">
                <p>{title}</p>
                <p>{isDone}</p>

            </div>
        </>
    )
}

export default ToDo;