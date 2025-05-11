
export function PricesCardBodyListContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="w-4/5 flex flex-col gap-2 p-2 justify-center mb-3 h-[250px]">
      {children}
    </ul>
  );
}