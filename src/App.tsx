import './App.css'
import AddTask from './components/AddTask.tsx';
import Tasks from './components/Tasks.tsx';

function App() {




  return (
    <>
      <div className="title">
          To do app
      </div>
      <div>
        <AddTask />
      </div>
      <div>
        <Tasks />
      </div>
    </>
  )
}

export default App
