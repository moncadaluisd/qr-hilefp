const stats = [
  { name: "In Progress Orders", stat: "4" },
  { name: "Canceled Orders", stat: "12" },
  { name: "Delivered Orders", stat: "150" },
  { name: "Out of stock products", stat: "0" },
  { name: "Total Products", stat: "120" },
  { name: "Order Reviews", stat: "0" },
];

export default function DashboardOrderStats() {
  return (
    <div className="my-4">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-6">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

