import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";

const PasswordInput = ({ label, name, value, onChange, placeholder, required = false, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordView = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordView}>
          {showPassword ? <FaRegEyeSlash className="text-gray-400" /> : <FaRegEye className="text-gray-400" />}
        </span>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;
