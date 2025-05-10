export interface PricesCardHeaderOfferProps {
  price: string;
  cardI: number;
}

export function PricesCardHeaderOffer({
  price,
  cardI,
}: PricesCardHeaderOfferProps) {
  if (cardI === 4) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="flex items-end gap-2 mb-3 justify-center w-full">
          <h2 className="text-4xl font-extrabold text-[var(--primary-text-color)]">
            SOB CONSULTA
          </h2>
        </div>
        <button className="w-4/5 bg-green-500 p-3 rounded-2xl text-white font-medium">
          PAGAMENTO ÚNICO ESPECIAL
        </button>
      </div>
    );
  } else if(cardI === 3) {
    return (
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <div className="flex items-end gap-2 mb-3">
          <span className="text-white font-bold text-lg">12 x</span>
          <h2 className="text-4xl font-bold text-[var(--primary-text-color)]">
            <span>R$</span>
            {price}
          </h2>
        </div>
        <button className="w-4/5 bg-green-500 p-2 rounded-2xl text-white font-medium">
          NO CARTÃO SEM JUROS
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4">
      <div className="flex items-end gap-2 mb-3">
        <span className="text-[var(--primary-text-color)] font-bold text-lg">12 x</span>
        <h2 className="text-4xl font-bold text-[var(--primary-text-color)]">
          <span>R$</span>
          {price}
        </h2>
      </div>
      <button className="w-4/5 bg-green-500 p-2 rounded-2xl text-white font-medium">
        NO CARTÃO SEM JUROS
      </button>
    </div>
  );
}
