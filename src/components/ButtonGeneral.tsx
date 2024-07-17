import React, { forwardRef } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export interface ButtonGeneralProps {
  name?: string;
  type?: "general" | "secondary" | "danger" | "success";
  [key: string]: any; // To allow other props
}

const ButtonGeneral = forwardRef<HTMLButtonElement, ButtonGeneralProps>(
  ({ name, type = "general", ...props }, ref) => {
    const buttonType = {
      general:
        "bg-primary hover:bg-primary/90 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      danger:
        "bg-red-600 hover:bg-red-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      success:
        "bg-green-600 hover:bg-green-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
      secondary:
        "bg-white hover:bg-gray-50 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ring-gray-300 text-gray-900",
    };

    return (
      <button
        ref={ref}
        className={`rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonType[type]}`}
        {...props}
      >
        {name}
      </button>
    );
  }
);

ButtonGeneral.displayName = "ButtonGeneral";

export default ButtonGeneral;

