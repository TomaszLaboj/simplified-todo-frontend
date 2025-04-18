import './Task.css';

export interface TaskType {
    title: string;
    isDone: string;
}

const Task  = ({title, isDone}: TaskType)=> {
    return (
        <>
            <div className="card">
                <p>{title}</p>
                <p>{isDone}</p>

            </div>
        </>
    )
}

export default Task;