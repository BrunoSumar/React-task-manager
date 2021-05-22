import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {
    return (
        <button
          onClick={onClick}
          className='btn shadow'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'button',
    color: 'black',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
