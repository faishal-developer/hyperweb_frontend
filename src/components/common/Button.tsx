const Button = ({ onClick, children, color ,disabled}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md focus:outline-none ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;