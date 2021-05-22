import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task)=>task.id !== id))
    }

    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task)=>(
          task.id === id ?
            {...task, reminder: !task.reminder}:
            task
        ))
      )
    }

    const addTask = (task) => {
      const id = Math.floor(Math.random()*10000)
      setTasks([...tasks, {id, ...task}])
    }

    const toggleAddTask = () => {
      setShowAddTask(!showAddTask)
    }

    return (
      <div className="container">
        <Header
          onAdd={toggleAddTask}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask}/>}
        <div className='divisor'></div>
        { (tasks.length > 0) ?
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> :
          <p className='center'>Nenhuma tarefa salva.</p>
        }
      </div>
    )
}

export default App;
