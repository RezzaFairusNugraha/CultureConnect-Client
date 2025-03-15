const Button = ({ type = "button", onClick, children, className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  