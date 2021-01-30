import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = (props) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{props.title}</h1>
            {location.pathname === '/' &&
                <Button 
                bgcolor={props.showAdd ? '#9e1a1a' : 'black'} 
                text={props.showAdd ? 'Close' : 'Add'}
                onClick={props.onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: "Track your Tasks - default",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showAdd: PropTypes.bool,
}

export default Header
