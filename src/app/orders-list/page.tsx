import DashboardOrderStats from "@/components/DashboardOrdersStats";
import GroupButtonsSmall from "@/components/GroupButtonsSmall";
import Pagination from "@/components/pagination";

const orders = [
  {
    id: 1,
    order: "Order 1",
    date: "2021-09-01",
    customer: "Customer 1",
    payment: "Cash",
    total: 250,
    items: 5,
    status: "Pending",
  },
  {
    id: 2,
    order: "Order 2",
    date: "2021-09-02",
    customer: "Customer 2",

    payment: "Credit Card",
    total: 150,
    items: 3,
    status: "Delivered",
  },
  {
    id: 3,
    order: "Order 3",
    date: "2021-09-03",
    customer: "Customer 3",
    payment: "Cash",
    total: 250,
    items: 5,
    status: "Pending",
  },
  // More people...
];

const tabs = [
  { name: "Dine In", id: 1, current: false },
  { name: "Delivery", id: 2, current: true },
  { name: "Pick up", id: 3, current: true },
];

export default function OrdersList() {
  return (
    <main className={"xl:pl-0"}>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-3 text-gray-900">
              Orders
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"></div>
        </div>
        <DashboardOrderStats />

        <GroupButtonsSmall tabs={tabs} />
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Order
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Paymant
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Items
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {orders.map((orders) => (
                      <tr key={orders.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {orders.order}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.date}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.customer}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.payment}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.total}
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.items}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {orders.status}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

