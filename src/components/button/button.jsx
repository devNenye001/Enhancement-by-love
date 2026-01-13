import "./button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="pink-button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {}, 
};

export default Button;