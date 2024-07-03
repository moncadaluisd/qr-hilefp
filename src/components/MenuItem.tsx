import React from "react";

const MenuItem = ({
  item,
  selected = false,
}: {
  item: any;
  selected?: boolean;
}) => {
  return (
    <li
      className={`flex items-center justify-between gap-x-6 py-5 px-2 hover:bg-gray-100 cursor-pointer ${
        selected ? "bg-gray-100" : ""
      }`}
    >
      <div className="min-w-0">
        <div className="flex items-start gap-x-3">
          <p className="text-sm font-semibold leading-6 text-gray-900">
            {item.name}
          </p>
        </div>
      </div>
      <div className="flex flex-none items-center gap-x-4">
        <a
          href={item.href}
          className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
        >
          Edit<span className="sr-only">, {item.name}</span>
        </a>
      </div>
    </li>
  );
};

export default MenuItem;

