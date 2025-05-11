import { CoursesCardContainer } from "../courses_container_card";
import { CoursesCardButton } from "./courses_card_button";
// import { CoursesCardDescription } from "./courses_card_description";
import { CoursesCardTitle } from "./courses_card_title";
import {
  CoursesCardImageContent,
  ICoursesCardImageContentProps,
} from "./courses_image_content";

interface ICoursesCard {
  image: ICoursesCardImageContentProps;
  title: string;
  // description: string;
}

export function CoursesCard({ title, image }: ICoursesCard) {
  return (
    <CoursesCardContainer>
      <div className="w-2/5 h-full min-sm:w-3/5">
        <CoursesCardImageContent
          src={image.src}
          alt={image.alt}
          description_course={image.description_course}
        />
      </div>
      <div className="p-2 flex flex-col gap-5 w-3/5">
        <div className="flex items-center gap-2">
          <span className="p-1 text-white bg-[var(--primary-pink)] rounded-2xl text-sm w-[80px] flex items-center justify-center font-medium">
            Pós EAD
          </span>
        </div>
        <CoursesCardTitle title={title} />
        {/* <CoursesCardDescription description={description} /> */}
        <CoursesCardButton />
      </div>
    </CoursesCardContainer>
  );
}
