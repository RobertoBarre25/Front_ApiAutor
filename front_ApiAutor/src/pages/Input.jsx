import '../components/Input.css';

const Input = ({ label, ...props }) => (
  <div className="input-group">
    <label className="input-label">{label}</label>
    <input className="input-field" {...props} />
  </div>
);

export default Input;
