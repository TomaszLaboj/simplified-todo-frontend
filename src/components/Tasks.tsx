import Task, { TaskType } from './Task.tsx';
import { useEffect, useState } from "react";

const Tasks = () => {
    const url = 'http://localhost:8080/';

    const [tasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        const getData = async () => {
           const data = await fetch(url);
           const list = await data.json();
           setTasks(list);
        }

        getData();

    }, [])
    console.log(tasks)
    return (
        <>
            <div>
                {tasks.map((task) => <Task key={task.title} title={task.title} isDone={task.isDone ? 'done' : 'not done'}/>)}
            </div>
        </>
    )
}
export default Tasks;