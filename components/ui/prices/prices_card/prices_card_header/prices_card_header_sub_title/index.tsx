export function PricesCardHeaderSubTitle({ quantity }: { quantity: number }) {
  return (
    <>
      {quantity === 1 ? (
        <h1 className="text-4xl font-bold text-[var(--primary-text-color)] border-b border-dashed">
          {quantity} PÓS
        </h1>
      ) : quantity < 4 ? (
        <h1 className="text-4xl font-bold text-[var(--primary-text-color)] border-b border-dashed">
          {quantity} PÓS + 1 GRÁTIS
        </h1>
      ) : (
        <h1 className="text-4xl font-bold text-[var(--primary-text-color)] border-b border-dashed">
          4 CURSOS OU MAIS
        </h1>
      )}
    </>
  );
}
