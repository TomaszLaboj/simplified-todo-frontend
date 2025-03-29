
interface Task {
    title: string;
    isDone: boolean;
}

function Task ({ title, isDone }: Task){

    return (
        <>
            <div>
                {title}
                {isDone ? "finished" : "not finished"}
            </div>
        </>
    )
}

export default Task;