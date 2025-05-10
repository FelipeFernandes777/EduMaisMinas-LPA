export function PricesCardBodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col mt-4">
      {children}
    </div>
  );
}
