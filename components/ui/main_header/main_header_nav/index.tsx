import Image from "next/image";
import { MainHeaderTitle } from "../main_header_title";
import { MainHeaderButton } from "../main_header_button";
import trevo from "@/public/trevo14.png";
import plus from "@/public/plus.png";

export function MainHeaderNav() {
  return (
    <nav className="w-full flex justify-between flex-col gap-2 items-start p-4 shadow-md">
      <div className="flex gap-2 justify-center items-center cursor-pointer">
        <div className="max-sm:hidden">
          <MainHeaderTitle title="Área" />
          <Image alt="Sinal de +" src={plus} width={20} height={20} />
          <MainHeaderTitle title="Valorizadas" />
        </div>
        <MainHeaderTitle title="Área mais Valorizadas" />
      </div>
      <MainHeaderTitle title="Planos" />
      <div className="flex gap-2 justify-center items-center cursor-pointer">
        <div className="max-sm:hidden">
          <Image alt="Sinal de +" src={plus} width={20} height={20} />
          <MainHeaderTitle title="Vantagens da Nossa Pós" />
        </div>
        <MainHeaderTitle title="Mais vantagens da Nossa Pós" />
      </div>
      <MainHeaderTitle title="Depoimentos" />
      <div className="w-full flex flex-col gap-2">
        <MainHeaderButton
          color="green"
          hasIcon={true}
          title="Matrícula da sorte"
          icon={trevo}
        />
        <MainHeaderButton
          color="pink"
          hasIcon={false}
          title="Fale conosco"
          icon={""}
        />
      </div>
    </nav>
  );
}
