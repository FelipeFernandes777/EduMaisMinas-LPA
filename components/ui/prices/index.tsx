import { PricesCard, PricesCardProps } from "./prices_card";
import { PricesContainer } from "./prices_container";
import { PricesSubTitle } from "./prices_sub_title";
import { PricesTitle } from "./prices_title";

export function Prices() {
  const cardPrices: PricesCardProps[] = [
    {
      header: {
        title: "Essencial",
        quantity: 1,
        description: {
          quantity: 1,
          title:
            "Para quem quer dar o primeiro passo com inteligência e economia",
          subtitle:
            "Ideal para iniciantes que buscam qualificação com investimento acessível",
        },
        offer: {
          price: "39,90",
          cardI: 1,
        },
      },
      body: {
        quantity: 1,
        list: [
          { title: "Acesso imediato a 1 curso de Pós-Graduação" },
          { title: "Bônus 1 curso de extensão ou capacitação grátis" },
          { title: "1 Número do Matrícula da Sorte" },
          { title: "Tutoria Online" },
          { title: "Certificado Digital" },
          { title: "Suporte Especializado" },
        ],
      },
      className: "bg-white/80",
    },
    {
      header: {
        title: "Essencial",
        quantity: 2,
        description: {
          quantity: 2,
          title: "Duas formações, o dobro de oportunidades no mercado",
          subtitle:
            "Pensado para quem quer ampliar seu leque de atuação com foco e visão",
        },
        offer: {
          price: "36,95 CADA",
          cardI: 2,
        },
      },
      body: {
        quantity: 2,
        list: [
          { title: "Acesso imediato a 2 curso de Pós-Graduação" },
          { title: "+ 1 Pós Grátis" },
          { title: "Bônus de 2 cursos de extensão ou capacitação" },
          { title: "2 Números do Matrícula da Sorte" },
          { title: "Tutoria Online" },
          { title: "Certificado Digital" },
          { title: "Suporte Especializado" },
        ],
      },
      className: "bg-white/80",
    },
    {
      header: {
        title: "Essencial",
        quantity: 3,
        description: {
          quantity: 3,
          title:
            "Para quem quer dar o primeiro passo com inteligência e economia",
          subtitle:
            "Ideal para iniciantes que buscam qualificação com investimento acessível",
        },
        offer: {
          price: "39,90 CADA",
          cardI: 3,
        },
      },
      body: {
        quantity: 3,
        list: [
          { title: "Acesso imediato a 3 curso de Pós-Graduação" },
          { title: "+ 1 Pós Grátis" },
          { title: "Bônus 3 curso de extensão ou capacitação grátis" },
          { title: "3 Número do Matrícula da Sorte" },
          { title: "Tutoria Online" },
          { title: "Certificado Digital" },
          { title: "Suporte Especializado" },
        ],
      },
      className:
        "bg-gradient-to-br from-[var(--primary-pink)] via-[var(--primary-pink)]/90 to-[var(--primary-pink)]/70",
    },
    {
      header: {
        title: "VISIONÁRIO",
        quantity: 4,
        description: {
          quantity: 4,
          title: "A gente te ajuda a ir além.",
          subtitle:
            "Um plano sob medida para mentes inquietas, líderes e empreendedores de alto nível.",
        },
        offer: {
          price: "",
          cardI: 4,
        },
      },
      body: {
        quantity: 4,
        list: [{ title: "CONSULTE CONDIÇÕES ESPECIAIS" }],
      },
      className:
        "bg-gradient-to-br from-[var(--primary-pink)] via-[var(--primary-pink)]/90 to-[var(--primary-pink)]/70",
    },
  ];

  return (
    <PricesContainer>
      <div className="flex flex-col w-full">
        <PricesTitle title="Quer saber como ter sucesso na sua carreira? Nós temos um plano." />
        <PricesSubTitle subtitle="Escolha o melhor para você." />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-5">
        {cardPrices.map((card, index) => (
          <PricesCard
            key={index}
            header={card.header}
            body={card.body}
            className={card.className}
          />
        ))}
      </div>
    </PricesContainer>
  );
}
