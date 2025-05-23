import { createContext } from "react";

type MyContextType = {
    tasks: string[];
    setTasks: (task: string[]) => void;
};

const MyContext = createContext<MyContextType>({
    tasks: [], setTasks(): void {}
});

const buildInitialState = (
    [tasks, setTasks]: [string[], (t: string[]) => void]
) => ({
    tasks, setTasks
});

export type { MyContextType };
export { buildInitialState };
export default MyContext;