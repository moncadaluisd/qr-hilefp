import React, { ChangeEvent } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classDiv?: string;
  classInput?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label = "",
  placeholder = "",
  value,
  onChange,
  type = "text",
  classDiv = "",
  classInput = "",
}) => {
  return (
    <div className={classDiv}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classInput}`}
        />
      </div>
    </div>
  );
};

export default TextInput;

