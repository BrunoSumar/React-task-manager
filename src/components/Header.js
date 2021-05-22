import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className='header'>
          <h1>{title}</h1>
          <Button
            color='green'
            text={showAdd? 'Ocultar menu':'Adicionar Tarefa'}
            onClick={onAdd}
          />
        </div>
    )
}

Header.defaultProps = {
    title: '- Lista de tarefas -',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
