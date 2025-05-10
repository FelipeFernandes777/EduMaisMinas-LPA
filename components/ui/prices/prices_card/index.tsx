import { PricesCardBody, PricesCardBodyProps } from "./prices_card_body";
import { PricesCardContainer } from "./prices_card_container";
import { PricesCardHeader, PricesCardHeaderProps } from "./prices_card_header";

export interface PricesCardProps {
  header: PricesCardHeaderProps;
  body: PricesCardBodyProps;
  className?: string;
}

export function PricesCard({ header, body, className }: PricesCardProps) {
  return (
    <PricesCardContainer className={className}>
      <PricesCardHeader {...header} />
      {body.quantity < 3 ? (
        <div className="border-t border-black/95 w-4/5 mt-4"></div>
      ) : (
        <div className="border-t border-white/95 w-4/5 mt-4"></div>
      )}
      <PricesCardBody {...body} />
    </PricesCardContainer>
  );
}
