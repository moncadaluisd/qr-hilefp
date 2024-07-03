import React from "react";

interface TextAreaDescriptionProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  classDiv?: string;
  classInput?: string;
}
const TextAreaDescription: React.FC<TextAreaDescriptionProps> = ({
  name,
  label = "",
  placeholder = "",
  classDiv = "",
  classInput = "",
  value,
  onChange,
}) => {
  return (
    <div className={classDiv}>
      <label
        htmlFor="about"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={3}
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${classInput}`}
          defaultValue={""}
        />
      </div>
    </div>
  );
};

export default TextAreaDescription;

