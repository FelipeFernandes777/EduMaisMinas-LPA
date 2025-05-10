import { BenefitsCard } from "./benefits_card";
import { BenefitsContainer } from "./benefits_container";
import { BenefitsContainerCard } from "./benefits_container_card";
import { BenefitsSubTitle } from "./benefits_sub_title";
import { BenefitsTitle } from "./benefits_title";

export function Benefits() {
  const benefits = [
    {
      src: "/benefits/flex.png",
      alt: "Imagem de uma mulher estudando com um computador em varios locais",
      title: "Flexibilidade",
      description:
        "Estude no seu tempo, de onde quiser sem transito, sem extresse.",
    },
    {
      src: "/benefits/diferencial.png",
      alt: "Imagem de uma reunião com grafico de crescimento",
      title: "Diferencial Competitivo",
      description:
        "Destaque-se no mercado com conhecimentos especializados e atualizados.",
    },
    {
      src: "/benefits/economia.png",
      alt: "Uma pessoa segurando uma placa de desconto",
      title: "Economia",
      description:
        "Pós de qualidade com preço acessivel e zero custo com deslocamento.",
    },
    {
      src: "/benefits/certificado.png",
      alt: "Uma imagem de um certificado",
      title: "Certificado Rápido e Válido",
      description:
        "Certificado autorizado pelo MEC, aceito em todo o Brasil com entrega digital em até 48 horas úteis após a conclusão.",
    },
    {
      src: "/benefits/suporte.png",
      alt: "Imagem de uma mulher com um fone de ouvido",
      title: "Suporte Completo",
      description:
        "Atendimento humanizado e suporte tecnico e pedagógico durante toda a sua jornada.",
    },
    {
      src: "/benefits/trevodasorte.jpg",
      alt: "Imagem de um trevo de quatro folhas",
      title: "Matrícula da Sorte",
      description:
        "Matriclou? Já Concorre a prêmios mensais como o DOBRO do valor investido e a uma MOTO 0km no sorteio anual!",
    },
  ];

  return (
    <BenefitsContainer>
      <BenefitsTitle title="Por que iniciar sua pós aqui na EDUCA+?" />
      <BenefitsSubTitle subTitle="É a chance de mudar de vida com quem acredita em você" />
      <BenefitsContainerCard>
        {benefits.map((benefit, index) => (
          <BenefitsCard
            key={index}
            src={benefit.src}
            alt={benefit.alt}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </BenefitsContainerCard>
    </BenefitsContainer>
  );
}
