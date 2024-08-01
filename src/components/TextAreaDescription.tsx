"use client";
import React, { forwardRef } from "react";

interface TextAreaDescriptionProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  classDiv?: string;
  classInput?: string;
  error?: string;
}

const TextAreaDescription: React.FC<TextAreaDescriptionProps> = forwardRef(
  (
    {
      name,
      label = "",
      placeholder = "",
      classDiv = "",
      classInput = "",
      value,
      onChange,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classDiv}>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        )}
        <div className="mt-2">
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={3}
            ref={ref}
            className={`block w-full px-2 rounded-md  shadow-xs border-b-2 border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classInput}`}
            {...props}
          />
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    );
  }
);

TextAreaDescription.displayName = "TextAreaDescription";

export default React.memo(TextAreaDescription);

