import './Button.css';

const Button = ({ children, ...props }) => ( 
  <button className="custom-btn" {...props}>
    {children}
  </button>
);

export default Button;
