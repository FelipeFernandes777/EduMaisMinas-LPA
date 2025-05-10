
export function PricesCardBodyListContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="w-4/5 h-full flex flex-col gap-2 p-2 justify-center">
      {children}
    </ul>
  );
}