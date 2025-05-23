import { ChangeEvent, useContext, useState } from "react";
import MyContext from "../store/context.ts";

const Tasks = () => {
    const [input, setInput] = useState('');
    const { tasks, setTasks } = useContext(MyContext);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(() => event.target.value);
    };

    const handleSubmit = () => {
        setTasks([...tasks, input]);
        setInput('');
    };
    return (
        <>
            <div>
                {tasks}
            </div>
            <input value={input} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </>
    );

};
export default Tasks;