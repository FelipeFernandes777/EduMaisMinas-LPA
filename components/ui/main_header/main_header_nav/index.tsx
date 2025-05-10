import Image from "next/image";
import { MainHeaderTitle } from "../main_header_title";
import { MainHeaderButton } from "../main_header_button";

export function MainHeaderNav() {
  return (
    <nav className="w-full flex justify-between flex-col gap-2 items-start">
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
      <div className="w-11/12 flex flex-col gap-2">
        <MainHeaderButton color="green" hasIcon={true} title="Matrícula da sorte" icon={""}/>
        <MainHeaderButton color="pink" hasIcon={false} title="Fale conosco" icon={""}/>
      </div>
    </nav>
  );
}
