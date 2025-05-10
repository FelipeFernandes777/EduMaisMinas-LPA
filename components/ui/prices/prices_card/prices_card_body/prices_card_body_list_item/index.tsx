export function PricesCardBodyListItem({
  item,
  quantity,
}: {
  item: string;
  quantity: number;
}) {
  return (
    <>
      {quantity < 3 ? (
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-check-icon lucide-check text-[var(--primary-text-color)]"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-[var(--primary-text-color)] font-medium tracking-tight">
            {item}
          </span>
        </li>
      ) : (
        <li className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-check-icon lucide-check text-white/95"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <span className="text-white/95 font-medium tracking-tight">
            {item}
          </span>
        </li>
      )}
    </>
  );
}
