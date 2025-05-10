
export function PricesCardHeaderContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col">
      {children}
    </div>
  );
}