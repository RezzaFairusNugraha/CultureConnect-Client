const InputField = ({ label, type, name, value, onChange, placeholder, icon: Icon, required = false, className = "", error }) => {
    return (
      <div className="relative">
        <label htmlFor={name} className="block mb-2 text-sm font-medium">
          {label}
        </label>
        <div className="relative">
          {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />}
          <input
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${Icon ? 'pl-10' : ''} ${className}`}
          />
        </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  };
  
  export default InputField;
  