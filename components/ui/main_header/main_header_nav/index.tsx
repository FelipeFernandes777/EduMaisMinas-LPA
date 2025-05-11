import Image from "next/image";
import { MainHeaderTitle } from "../main_header_title";
import { MainHeaderButton } from "../main_header_button";
import trevo from "@/public/trevo14.png";
import plus from "@/public/plus.png";

export function MainHeaderNav() {
  return (
    <nav className="w-full flex justify-between flex-col gap-2 items-start p-4 shadow-md min-md:shadow-none">
      <div className="hidden min-[769px]:flex min-md:justify-evenly min-md:w-full">
        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <div className="max-sm:hidden flex gap-2">
            <MainHeaderTitle id="cursos" title="Áreas" />
            <Image alt="Sinal de +" src={plus} width={18} height={20} />
            <MainHeaderTitle title="Valorizadas" id="cursos" />
          </div>
          <div className="min-sm:hidden">
            <MainHeaderTitle title="Áreas mais Valorizadas" id="cursos" />
          </div>
        </div>
        <MainHeaderTitle title="Planos" id="precos" />
        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <div className="max-sm:hidden flex gap-2">
            <Image alt="Sinal de +" src={plus} width={18} height={20} />
            <MainHeaderTitle title="Vantagens da Nossa Pós" id="beneficios" />
          </div>
          <div className="min-sm:hidden">
            <MainHeaderTitle
              title="Mais vantagens da Nossa Pós"
              id="beneficios"
            />
          </div>
        </div>
        <MainHeaderTitle title="Depoimentos" id="depoimentos" />
      </div>
      <div className="flex gap-2 cursor-pointer min-[769px]:hidden flex-col">
        <div className="max-sm:hidden flex gap-2">
          <MainHeaderTitle id="cursos" title="Áreas" />
          <Image alt="Sinal de +" src={plus} width={24} height={20} />
          <MainHeaderTitle title="Valorizadas" id="cursos" />
        </div>
        <div className="min-sm:hidden">
          <MainHeaderTitle title="Áreas mais Valorizadas" id="cursos" />
        </div>
        <MainHeaderTitle title="Planos" id="precos" />
        <div className="flex gap-2 justify-center items-center cursor-pointer">
          <div className="max-sm:hidden flex gap-2">
            <Image alt="Sinal de +" src={plus} width={24} height={20} />
            <MainHeaderTitle title="Vantagens da Nossa Pós" id="beneficios" />
          </div>
          <div className="min-sm:hidden">
            <MainHeaderTitle
              title="Mais vantagens da Nossa Pós"
              id="beneficios"
            />
          </div>
        </div>
        <MainHeaderTitle title="Depoimentos" id="depoimentos" />
      </div>
      <div className="w-full flex flex-col gap-2 min-md:flex-row">
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
