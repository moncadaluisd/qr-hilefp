import DashboardOrderStats from "@/components/DashboardOrdersStats";
import DashboardStats from "@/components/DashboardStats";
import H1Title from "@/components/H1Title";
import { PencilIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <main className={"xl:pl-0"}>
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
              <H1Title title="Jimmy Burger Dashbaord" />
              <p className="text-sm font-medium text-gray-500">
                Hi{" "}
                <a href="#" className="text-gray-900">
                  Luis!
                </a>{" "}
                Let&apos;s check your stats today!
              </p>
            </div>

            <div className="mt-5 flex lg:ml-4 lg:mt-0">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon
                    className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Go to Orders
                </button>
              </span>
            </div>
          </div>
          <DashboardOrderStats />

          <DashboardStats />
        </div>
      </main>
    </>
  );
};

export default Dashboard;

