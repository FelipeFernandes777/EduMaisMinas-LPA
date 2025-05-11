import Image from "next/image";
import { CoursesContainer } from "./courses_container";
import { CoursesTitle } from "./courses_title";
import { CoursesSubTitle } from "./courses_sub_title";
import { CoursesCard } from "./courses_card";

import plus from "@/public/plus.png";
import juridicaP from "@/public/courses/juridica.jpg";
import engenhariaP from "@/public/courses/engenharia.jpg";
import saudeP from "@/public/courses/saude.jpg";
import negociosP from "@/public/courses/negocios.jpg";
import educacaoP from "@/public/courses/educacao.jpg";
import servicoSocialP from "@/public/courses/servicosocial.jpg";
import tecnologiaP from "@/public/courses/tecnologia.jpg";
import comunicacaoP from "@/public/courses/comunicacao.jpg";
import mbaP from "@/public/courses/mba.jpg";

export function Courses() {
  const courses = [
    {
      image: {
        src: educacaoP,
        alt: "Imagem de Educação",
        description_course: "EDUCAÇÃO",
      },
      title: "EDUCAÇÃO",
      description:
        "Aprenda a criar interfaces incríveis e funcionais com foco na experiência do usuário.",
    },
    {
      image: {
        src: saudeP,
        alt: "Imagem de Saude",
        description_course: "SAÚDE",
      },
      title: "SAÚDE",
      description:
        "Domine as estratégias de marketing digital para impulsionar negócios online.",
    },
    {
      image: {
        src: engenhariaP,
        alt: "Imagem de programação",
        description_course: "ENGENHARIA",
      },
      title: "ENGENHARIA",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: juridicaP,
        alt: "Imagem de programação",
        description_course: "JURIDICA",
      },
      title: "JURIDICA",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: negociosP,
        alt: "Imagem de programação",
        description_course: "NEGÓCIOS",
      },
      title: "NEGÓCIOS",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: servicoSocialP,
        alt: "Imagem de programação",
        description_course: "SERVIÇO SOCIAL",
      },
      title: "SERVIÇO SOCIAL",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: tecnologiaP,
        alt: "Imagem de programação",
        description_course: "TECNOLOGIA",
      },
      title: "TECNOLOGIA",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: comunicacaoP,
        alt: "Imagem de programação",
        description_course: "COMUNICAÇÃO",
      },
      title: "COMUNICAÇÃO",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
    {
      image: {
        src: mbaP,
        alt: "Imagem de programação",
        description_course: "MBA",
      },
      title: "MBA",
      description:
        "Aprenda a programar e desenvolva habilidades essenciais para o mercado de trabalho.",
    },
  ];

  return (
    <CoursesContainer>
      <div className="flex flex-col items-center w-full h-full mt-4">
        <div className="flex items-center gap-2">
          <CoursesTitle title="Áreas" />
          <Image alt="Imagem do simbolo de +" src={plus} className="w-6 h-6" />
          <CoursesTitle title="Valorizadas" />
        </div>
        <CoursesSubTitle />
      </div>
      <div className="grid grid-cols-1 place-items-center place-content-center w-full h-full gap-4 p-4">
        {courses.map((coursestest) => (
          <CoursesCard
            key={coursestest.title}
            image={coursestest.image}
            title={coursestest.title}
          />
        ))}
      </div>
    </CoursesContainer>
  );
}
