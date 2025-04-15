import { useEffect, useState } from "react";

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
  readOnly = false,
  min,
  max,
  step,
  customValidation,
}) => {
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    const rawValue = e.target.value;

    if (type === "number") {
      if (rawValue === "") {
        setLocalError("");
        onChange({ target: { name, value: "" } });
        return;
      }

      const numValue = Number(rawValue);

      if (customValidation) {
        const errorMsg = customValidation(numValue);
        setLocalError(errorMsg || "");
      } else {
        if (min !== undefined && numValue < min) {
          setLocalError(`Nilai minimal ${min}`);
        } else if (max !== undefined && numValue > max) {
          setLocalError(`Nilai maksimal ${max}`);
        } else {
          setLocalError("");
        }
      }

      onChange({ target: { name, value: numValue } });
    } else {
      onChange({ target: { name, value: rawValue } });
    }
  };

  useEffect(() => {
    if (type !== "number") {
      setLocalError("");
    }
  }, [type]);

  return (
    <div className="relative">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800" />
        )}
        {type === "textarea" ? (
          <textarea
            name={name}
            id={`input-${name}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            readOnly={readOnly}
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 cursor-pointer ${className}`}
          />
        ) : type === "select" ? (
          <select
            name={name}
            id={`input-${name}`}
            value={value}
            onChange={onChange}
            required={required}
            disabled={readOnly}
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 cursor-pointer ${className}`}
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
            min={min}
            max={max}
            step={step}
            inputMode={type === "number" ? "numeric" : undefined}
            className={`bg-amber-50 border border-amber-800 text-gray-900 text-sm rounded-lg focus:ring-amber-900 focus:border-amber-900 block w-full p-2.5 cursor-pointer ${
              Icon ? "pl-10" : ""
            } ${className} ${
              type === "number"
                ? "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] cursor-pointer"
                : ""
            }`}
          />
        )}
      </div>
      {(localError || error) && (
        <p className="text-red-500 text-sm mt-1">{localError || error}</p>
      )}
    </div>
  );
};

export default InputField;
