import { PricesCardHeaderExclusive } from "./price_card_header_exclusive";
import { PricesCardHeaderInfoContainer } from "./price_card_header_info_container";
import { PricesCardHeaderContainer } from "./prices_card_header_container";
import {
  PricesCardHeaderDescription,
  PricesCardHeaderDescriptionProps,
} from "./prices_card_header_description";
import {
  PricesCardHeaderOffer,
  PricesCardHeaderOfferProps,
} from "./prices_card_header_offer";
import { PricesCardHeaderSubTitle } from "./prices_card_header_sub_title";
import { PricesCardHeaderTitle } from "./prices_card_header_title";

export interface PricesCardHeaderProps {
  title: string;
  quantity: number;
  description: PricesCardHeaderDescriptionProps;
  offer: PricesCardHeaderOfferProps;
}

export function PricesCardHeader({
  description,
  offer,
  quantity,
  title,
}: PricesCardHeaderProps) {
  return (
    <PricesCardHeaderContainer>
      <PricesCardHeaderTitle title={title} />
      <PricesCardHeaderInfoContainer>
        <PricesCardHeaderSubTitle quantity={quantity} />
        <PricesCardHeaderDescription
          quantity={quantity}
          title={description.title}
          subtitle={description.subtitle}
        />
      </PricesCardHeaderInfoContainer>
      <PricesCardHeaderOffer cardI={offer.cardI} price={offer.price} />
      <PricesCardHeaderExclusive quantity={quantity}/>
    </PricesCardHeaderContainer>
  );
}
