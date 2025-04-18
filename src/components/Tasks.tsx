import Task, { TaskType } from './Task.tsx';
import {useCallback, useEffect, useState} from "react";

interface TasksProps {
    reloadData: boolean;
    refetchData: () => void;
}

const Tasks = ({ reloadData, refetchData }: TasksProps) => {
    const url = 'http://localhost:8080/';
    const [tasks, setTasks] = useState<TaskType[]>([])
    const refetch = useCallback(() => {
        const getData = async () => {
           const data = await fetch(url);
           const list = await data.json();
           setTasks(list);
        }
        getData();
        refetchData();
    }, [url])

    useEffect(() => {
        refetch();
    }, [reloadData, refetch])

    return (
        <>
            <div>
                {tasks.map((task) => <Task key={task.title} title={task.title} isDone={task.isDone ? 'done' : 'not done'}/>)}
            </div>
        </>
    )
}
export default Tasks;