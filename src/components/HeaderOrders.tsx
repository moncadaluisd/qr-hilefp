import { CheckIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import TextInput from "./TextInput";
import GroupButtonsSmall from "./GroupButtonsSmall";

const tabs = [
  { name: "Dine In", id: 1, current: false },
  { name: "Delivery", id: 2, current: true },
  { name: "Pick up", id: 3, current: true },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderOrders() {
  return (
    <div className="relative flex justify-between items-center flex-row-reverse border-gray-200 pb-5 sm:pb-0 px-4 mb-4">
      <div className="md:flex md:items-center md:justify-between">
        <div className="mt-4 flex md:mt-0">
          <div className="flex items-center">
            <TextInput classDivInput={"mt-1"} placeholder="Search" />
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-1"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <GroupButtonsSmall tabs={tabs} />
    </div>
  );
}

