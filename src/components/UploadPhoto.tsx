import { PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

interface UploadPhotoProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    classDiv?: string;
    classInput?: string;
  }
const UploadPhoto: React.FC<UploadPhotoProps> = ({
  name,
  label = "",
  classDiv = "",
  value,
  onChange,
}) => {
  return (
    <div className={classDiv}>
      <label
        htmlFor="cover-photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={name}
              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                type="file"
                className="sr-only"
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;

