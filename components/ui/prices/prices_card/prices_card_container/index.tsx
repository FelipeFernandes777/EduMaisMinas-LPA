export function PricesCardContainer({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} w-full h-[750px] shadow-lg rounded-lg flex flex-col items-center py-4`}
    >
      {children}
    </div>
  );
}
