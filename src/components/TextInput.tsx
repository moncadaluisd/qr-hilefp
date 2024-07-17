import React, { ChangeEvent, forwardRef, RefObject } from "react";
import { useFormContext } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  classDiv?: string;
  classInput?: string;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = forwardRef(
  (
    {
      name,
      label = "",
      placeholder = "",
      value,
      onChange,
      type = "text",
      classDiv = "",
      classInput = "",
      itemRef,
      error,
    },
    ref: any
  ) => {
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
            {...{ name, placeholder, value, onChange, type }}
            ref={ref}
            itemRef={itemRef}
            className={`block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classInput}`}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;

