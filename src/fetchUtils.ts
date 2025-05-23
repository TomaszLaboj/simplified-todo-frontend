import { ToDoInterface } from "./components/ToDo.tsx";

const url = 'http://localhost:8080/';

export const createToDo = async (taskDescription: string) => {
    return await fetch(url, {
        method: "POST",
        body: JSON.stringify(taskDescription)
    });
};

const updateToDo = async (taskDescription: string) => {
    return await fetch(url, {
        method: "PUT",
        body: JSON.stringify(taskDescription)
    });
};

