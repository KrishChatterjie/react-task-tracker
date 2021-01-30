import PropTypes from 'prop-types'

const Button = ({ bgcolor, color, text, onClick }) => {
    return (
        <button style={{backgroundColor: bgcolor, color: color}} 
        className="btn" onClick={onClick}>
            {text}
        </button>
        )
}

Button.defaultProps = {
    text: "Add"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgcolor: PropTypes.string,
    color: PropTypes.string,
}

export default Button
