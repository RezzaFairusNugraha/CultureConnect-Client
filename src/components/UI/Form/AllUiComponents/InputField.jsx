const InputField = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  icon: Icon, 
  required = false, 
  className = "", 
  error, 
  options = [], 
  readOnly = false 
}) => {
  
  // Handler internal untuk mengubah string ke number jika perlu
  const handleChange = (e) => {
    const inputValue = type === "number" ? Number(e.target.value) : e.target.value;
    onChange({ target: { name, value: inputValue } });
  };

  return (
    <div className="relative">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800" />}
        {type === "textarea" ? (
          <textarea
            name={name}
            id={`input-${name}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly} 
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 ${className}`}
          />
        ) : type === "select" ? (
          <select
            name={name}
            id={`input-${name}`}
            value={value}
            onChange={onChange}
            required={required}
            disabled={readOnly} 
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 ${className}`}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            id={`input-${name}`}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            min={type === "number" ? 10 : undefined}
            max={type === "number" ? 100 : undefined}
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 ${Icon ? 'pl-10' : ''} ${className}`}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;