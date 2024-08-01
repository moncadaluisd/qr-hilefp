"use client";

import { useState } from "react";

const files = [
  {
    title: "View 1",
    size: "3.9 MB",
    source: "https://qr-code-admin.vercel.app/img/qr-code-type1.png",
  },
  {
    title: "View 2",
    size: "3.9 MB",
    source: "https://qr-code-admin.vercel.app/img/qr-code-type2.png",
  },
  {
    title: "View 3",
    size: "3.9 MB",
    source: "https://qr-code-admin.vercel.app/img/qr-code-type3.png",
  },
  // More files...
];

export default function SelectImage() {
  const [selected, setSelected] = useState<any>(null);
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 xl:gap-x-8 "
    >
      {files.map((file) => (
        <li
          key={file.source}
          className="relative p-2 pt-4"
          onClick={() => setSelected(file)}
        >
          <div
            className={`${
              selected?.source === file.source && "ring-primary-500 "
            }group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 h-96`}
          >
            <img
              alt=""
              src={file.source}
              className={
                "pointer-events-none object-cover group-hover:opacity-75" +
                (selected?.source === file.source ? " opacity-55" : "")
              }
            />
            <button
              type="button"
              className="absolute inset-0 focus:outline-none"
            >
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {file.title}
          </p>
          {selected?.source === file.source && (
            <div>
              <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                selected
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

