import HeadingPage from "@/components/HeadingPage";
import TextInput from "@/components/TextInput";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const ProfileUser = () => {
  return (
    <>
      <main className={"xl:pl-0"}>
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <form>
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                  <div className="col-span-full">
                    <label
                      htmlFor="photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Photo
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                      <UserCircleIcon
                        aria-hidden="true"
                        className="h-12 w-12 text-gray-300"
                      />
                      <button
                        type="button"
                        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <TextInput classDiv="sm:col-span-3" label="First Name" />

                  <TextInput classDiv="sm:col-span-3" label="Last Name" />

                  <TextInput
                    classDiv="sm:col-span-4"
                    label="email"
                    type="email"
                  />

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <TextInput classDiv="col-span-full" label="Street address" />

                  <TextInput classDiv="sm:col-span-2" label="City" />
                  <TextInput
                    classDiv="sm:col-span-2"
                    label=" State / Province"
                  />

                  <TextInput
                    classDiv="sm:col-span-2"
                    label=" ZIP / Postal code"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ProfileUser;

