export interface PricesCardHeaderDescriptionProps {
  title: string;
  subtitle: string;
  quantity: number;
}

export function PricesCardHeaderDescription({
  title,
  subtitle,
  quantity,
}: PricesCardHeaderDescriptionProps) {
  return (
    <>
      {quantity < 3 ? (
        <div className="flex flex-col items-center mt-2 min-sm:p-2">
          <span className="text-[var(--primary-text-color)] font-medium text-center text-xl tracking-tight">
            {title}
          </span>
          <span className="text-[var(--primary-text-color)] font-normal text-center tracking-tight">
            {subtitle}
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-2 min-sm:p-2">
          <span className="text-white/95 font-medium text-center text-xl tracking-tight">
            {title}
          </span>
          <span className="text-white/95 font-normal text-center tracking-tight">
            {subtitle}
          </span>
        </div>
      )}
    </>
  );
}
