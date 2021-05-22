import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
      e.preventDefault()
      if(!text){
        alert('Por favor preencha o nome da tarefa.')
        return
      }
      onAdd({text, day, reminder})
      setText('')
      setDay('')
      setReminder(false)
    }

    return (
      <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
              <label htmlFor='Tarefa'>Tarefa:</label>
              <input
                type='text'
                placeholder='Nome da tarefa'
                value={text}
                onChange={(e)=> setText(e.target.value)}
                id='Tarefa'
              />
            </div>
            <div className='form-control'>
              <label htmlFor='horario'>Data e hora:</label>
              <input
                type='text'
                placeholder='Horario da tarefa'
                value={day}
                onChange={(e)=> setDay(e.target.value)}
                id='horario'
              />
            </div>
            <div className='form-control form-control-check'>
              <label hmmlFor='reminder'>Criar lembrete:</label>
              <input
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e)=> setReminder(e.currentTarget.checked)}
                id='reminder'
              />
            </div>

          <input
            type='submit'
            value='Salvar tarefa'
            className='btn btn-block'
          />
        </form>
    )
}

export default AddTask
