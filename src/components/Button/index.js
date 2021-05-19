import './index.css';
export const Button = ({text, onClick, isActive}) => <button disabled={!isActive} onClick={onClick}>{text}</button>;
