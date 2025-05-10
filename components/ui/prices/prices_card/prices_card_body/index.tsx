import { PricesCardBodyButton } from "./prices_card_body_button";
import { PricesCardBodyContainer } from "./prices_card_body_container";
import { PricesCardBodyListContainer } from "./prices_card_body_list_container";
import { PricesCardBodyListItem } from "./prices_card_body_list_item";

export interface PricesCardBodyProps {
  list: { title: string }[];
  quantity: number;
}

export function PricesCardBody({ list,quantity }: PricesCardBodyProps) {
  return (
    <PricesCardBodyContainer>
      <PricesCardBodyListContainer>
        {list.map((item, index) => (
          <PricesCardBodyListItem key={index} item={item.title} quantity={quantity}/>
        ))}
      </PricesCardBodyListContainer>
      <PricesCardBodyButton />
    </PricesCardBodyContainer>
  );
}
