import deleteImg from '../delete.svg'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div
          className={!task.reminder? 'task':'task reminder'}
          onDoubleClick={()=>onToggle(task.id)}
        >
          <h3>
            {task.text}
            <img
              src={deleteImg}
              alt='Deletar tarefa'
              className='delete'
              onClick={()=>onDelete(task.id)}
            />
          </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
