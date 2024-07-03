


export default function MenuList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {children}
    </ul>
  );
}

