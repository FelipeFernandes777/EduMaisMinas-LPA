import { CoursesCardContainer } from "../courses_container_card";
import { CoursesCardButton } from "./courses_card_button";
import { CoursesCardDescription } from "./courses_card_description";
import { CoursesCardTitle } from "./courses_card_title";
import {
  CoursesCardImageContent,
  ICoursesCardImageContentProps,
} from "./courses_image_content";

interface ICoursesCard {
  image: ICoursesCardImageContentProps;
  title: string;
  description: string;
}

export function CoursesCard({ title, description, image }: ICoursesCard) {
  return (
    <CoursesCardContainer>
      <CoursesCardImageContent
        src={image.src}
        alt={image.alt}
        description_course={image.description_course}
      />
      <div className="p-2 flex flex-col gap-5">
        <CoursesCardTitle title={title} />
        <CoursesCardDescription description={description} />
      </div>
      <CoursesCardButton />
    </CoursesCardContainer>
  );
}
