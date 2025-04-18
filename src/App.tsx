import './App.css'
import AddTask from './components/AddTask.tsx';
import Tasks from './components/Tasks.tsx';
import {useState} from "react";

function App() {
    const [refetch, setRefetch] = useState(true)

    const refetchData = () => {
        setRefetch(!refetch);
    }

    return (
    <>
      <div className="title">
          To do app
      </div>
      <div>
        <AddTask refetch={refetchData}/>
      </div>
      <div>
        <Tasks reloadData={refetch} refetchData={refetchData}/>
      </div>
    </>
    )
}

export default App
