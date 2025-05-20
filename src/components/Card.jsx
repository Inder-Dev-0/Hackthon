const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`text-left ${className}`}>
      {children}
    </div>
  );
}


const Button = ({ children, className = "", onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 ${className}`}
      >
        {children}
      </button>
    );
  }


export { Card, CardContent, Button }