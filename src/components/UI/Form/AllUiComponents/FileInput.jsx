import React from "react";

const FileInput = ({ label, name, onChange, required = false, className = "", error, accept }) => {
  return (
    <div className="relative">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        className={`w-full p-2 border rounded-md shadow focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer ${className}`}
        accept={accept}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FileInput;