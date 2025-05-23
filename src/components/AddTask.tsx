import { useState } from "react";
import { createToDo } from "../fetchUtils.ts";

interface AddTaskProps {
    refetch: () => void;
}

function AddTask ({ refetch }: AddTaskProps ) {

    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (event: { target: { value: string; }; }) => {
        setTaskDescription(() => event.target.value);
    };

    const handleSubmit = async () => {
        const response = await createToDo(taskDescription);
        if (response.ok) {
            window.alert("Task updated");
        } else {
            window.alert("task is not updated" + response.status);
        }

        setTaskDescription(() => "");
        refetch();
    };

    return (
        <>
            <div className="card">
                <input onChange={handleChange} value={taskDescription}/>
                <button onClick={handleSubmit}>Add task</button>
            </div>
        </>
    );
}
export default AddTask;