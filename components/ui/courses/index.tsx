import Image from "next/image";
import { CoursesContainer } from "./courses_container";
import { CoursesTitle } from "./courses_title";
import plus from "@/public/plus.png";
import photoTest from "@/public/Educa+LogoHeader.png";
import { CoursesSubTitle } from "./courses_sub_title";
import { CoursesCard } from "./courses_card";

export function Courses() {
  const coursestest = {
    image: {
      src: photoTest,
      alt: "Imagem de ux-ui",
      description_course: "UX/UI",
    },
    title: "UX/UI",
    description:
      "Aprenda a criar interfaces incríveis e funcionais com foco na experiência do usuário.",
  };
  // const courses = [
  //   {
  //     image: {
  //       src: plus,
  //       alt: "Imagem de ux-ui",
  //       description_course: "UX/UI",
  //     },
  //     title: "UX/UI",
  //     description:
  //       "Aprenda a criar interfaces incríveis e funcionais com foco na experiência do usuário.",
  //   },
  //   {
  //     image: {
  //       src: plus,
  //       alt: "Imagem de marketing",
  //       description_course: "Marketing Digital",
  //     },
  //     title: "Marketing Digital",
  //     description:
  //       "Domine as estratégias de marketing digital para impulsionar negócios online.",
  //   },
  //   {
  //     image: {
  //       src: plus,
  //       alt: "Imagem de programação",
  //       description_course: "Programação",
  //     },
  //     title: "Programação",
  //     description:
  //       "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
  //   },
  // ];

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
      <div className="grid grid-cols-1 place-items-center place-content-center w-full h-full gap-4 p-4">
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
        <CoursesCard image={coursestest.image} title={coursestest.title} />
      </div>
    </CoursesContainer>
  );
}
