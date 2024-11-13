const Button = ({ children, styleClass, handleClick }) => {
  return (
    <button onClick={handleClick} className={`${styleClass}`}>
      {children}
    </button>
  );
};
export default Button;
