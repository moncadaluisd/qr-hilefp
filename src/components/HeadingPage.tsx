import {
  BriefcaseIcon,
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import H1Title from "./H1Title";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface HeadingPageProps {
  title: string;
  sucursal?: string | null;

  buttonPreview?: boolean;
}

export default function HeadingPage({
  title,
  sucursal = null,
  buttonPreview = false,
}: HeadingPageProps) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between px-8 pt-6 pb-2">
      <div className="min-w-0 flex-1">
        <H1Title title={title} />
        {sucursal && (
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              Sucursal:{" "}
              <span className="font-semibold text-gray-900 ml-1">
                {" "}
                {sucursal}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        {buttonPreview && (
          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <LinkIcon
                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Preview
            </button>
          </span>
        )}

        <span className="sm:ml-3">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Save
          </button>
        </span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <MenuButton className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Edit
                </a>
              )}
            </MenuItem>
           {
            buttonPreview && (
              <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  View
                </a>
              )}
            </MenuItem>)
           }
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
}

