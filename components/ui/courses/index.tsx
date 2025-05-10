import Image from "next/image";
import { CoursesContainer } from "./courses_container";
import { CoursesTitle } from "./courses_title";
import plus from "@/public/plus.png";
import { CoursesSubTitle } from "./courses_sub_title";
import { CoursesCardContainer } from "./courses_container_card";
import { CoursesCard } from "./courses_card";

export function Courses() {
  return (
    <CoursesContainer>
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex items-center gap-2">
          <CoursesTitle title="Áreas" />
          <Image alt="Imagem do simbolo de +" src={plus} className="w-6 h-6" />
          <CoursesTitle title="Valorizadas" />
        </div>
        <CoursesSubTitle />
      </div>
      <CoursesCardContainer>
       <CoursesCard />
      </CoursesCardContainer>
    </CoursesContainer>
  );
}
