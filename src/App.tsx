import './App.css';
import AddTask from './components/AddTask.tsx';
import Tasks from './components/Tasks.tsx';
import { useState } from "react";
import MyContext, { buildInitialState } from "./store/context.ts";

function App() {
    const [refetch, setRefetch] = useState(true);
    const refetchData = () => {
        setRefetch(!refetch);
    };

    const contextValue = buildInitialState(
        useState<string[]>(["one task"])
    );

    return (
        <MyContext value={contextValue}>

            <div className="title">
                To do app
            </div>
            <div>
                <AddTask refetch={refetchData}/>
            </div>
            <div>
                <Tasks />
            </div>

        </MyContext>
    );
}

export default App;
