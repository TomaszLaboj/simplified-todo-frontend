import {useState} from "react";

function AddTask () {

    const [taskDescription, setTaskDescription] = useState('');
    const handleChange = (event: { target: { value: string; }; }) => {
        setTaskDescription(() => event.target.value);
    }
    const handleSubmit = async () => {
        const url = 'http://localhost:8080/';
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(taskDescription)
        })
        if (response.ok) {
            window.alert("Task updated")
        } else {
            window.alert("task is not updated" + response.status)

        }
        console.log(taskDescription);
        setTaskDescription(() => "")
    }
    return (
        <>
            <div className="card">
                <input onChange={handleChange} value={taskDescription}/>
            <button onClick={handleSubmit}>Add task</button>
            </div>
        </>
    )
}
export default AddTask;