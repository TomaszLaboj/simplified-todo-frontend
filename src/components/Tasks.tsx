import Task from './Task.tsx';
import { useEffect, useState } from "react";

const Tasks = () => {
    const url = 'http://localhost:8080/';

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        const getData = async () => {
           const data = await fetch(url);
           const list = await data.json();
           setTasks(list);
        }

        getData();

    }, [])

    return (
        <>
            <div>
                {tasks.map((task) => <Task title={task.title} isDone={task.isDone}/>)}
            </div>
        </>
    )
}
export default Tasks;