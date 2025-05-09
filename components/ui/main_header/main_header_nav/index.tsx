import Image from "next/image";
import { MainHeaderTitle } from "../main_header_title";
import { MainHeaderButton } from "../main_header_button";

export function MainHeaderNav() {
  return (
    <nav className="w-full flex justify-between">
      <div className="flex gap-1">
        <MainHeaderTitle title="Área" />
        <Image alt="" src={""} />
        <MainHeaderTitle title="Valorizadas" />
      </div>
      <MainHeaderTitle title="Planos" />
      <div className="flex gap-1">
        <Image alt="" src={""} />
        <MainHeaderTitle title="Vantagens da Nossa Pós" />
      </div>
      <MainHeaderTitle title="Depoimentos" />
      <div>
        <MainHeaderButton color="green" hasIcon={true} title="Matrícula da sorte" icon={}/>
      </div>
    </nav>
  );
}
