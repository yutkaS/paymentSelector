import './index.css';

export const Button = ({text, onClick, inputValue}) => (
    <button disabled={!inputValue} onClick={onClick}>{text}</button>
)