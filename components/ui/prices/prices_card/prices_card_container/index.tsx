export function PricesCardContainer({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} w-full min-h-[750px] shadow-lg rounded-lg flex flex-col items-center py-4 min-sm:w-3/5
        border min-[769px]:!w-2/5
      `}
    >
      {children}
    </div>
  );
}
