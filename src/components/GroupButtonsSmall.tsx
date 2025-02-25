import { CheckIcon } from "lucide-react";
import React from "react";

interface GroupButtonsSmallProps {
  tabs: { name: string; current: boolean; id: number }[];
}
const GroupButtonsSmall: React.FC<GroupButtonsSmallProps> = ({ tabs }) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mt-4">
      <div className="sm:hidden">
        <label htmlFor="current-tab" className="sr-only">
          Select a tab
        </label>
        <select
          id="current-tab"
          name="current-tab"
          defaultValue={tabs.find((tab) => tab.current)?.name}
          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="-mb-px flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              type="button"
              className={classNames(
                tab.current
                  ? "border-indigo-600 text-indigo-600  ring-indigo-300"
                  : "border-transparent text-gray-500 hover:text-gray-700  ring-gray-300",
                "inline-flex items-center rounded-md bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset hover:bg-gray-50"
              )}
            >
              {tab.name} {tab.current ? <CheckIcon className="w-4 h-4" /> : ""}
            </button>
          ))}

          <button
            type="button"
            className={classNames(
              "border-indigo-600 text-white bg-indigo-500  hover:bg-indigo-600 ring-indigo-600",
              "inline-flex items-center rounded-md px-3 py-1 text-xs font-semibold shadow-sm ring-1 ring-inset "
            )}
          >
            Add Order
          </button>
        </nav>
      </div>
    </div>
  );
};

export default GroupButtonsSmall;

