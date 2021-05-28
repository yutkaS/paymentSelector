import './index.css';
import {PropTypes} from 'prop-types';


export const Button = ({text, onClick, isActive}) => (
    <button disabled={isActive} onClick={onClick}>{text}</button>
)
Button.defaultProps = {
    text:'',
    onClick:()=>{},
    isActive:false,
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
}