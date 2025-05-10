import Image, { StaticImageData } from "next/image";

export interface ICoursesCardImageContentProps {
  src: string | StaticImageData;
  alt: string;
  description_course: string;
}

export function CoursesCardImageContent({
  alt,
  src,
  description_course,
}: ICoursesCardImageContentProps) {
  return (
    <div className="h-full w-full group rounded-xl shadow-md">
      <Image
        alt={alt}
        src={src}
        className="object-cover w-full h-full rounded-tl-lg rounded-tr-lg"
      />
      <div
        className="absolute inset-0 bg-[#1C1B3A]/50 p-4 flex items-center justify-center 
            transition-opacity duration-300 opacity-0 group-hover:opacity-100 
            rounded-tl-lg rounded-tr-lg"
      >
        <p className="text-white text-center">{description_course}</p>
      </div>
    </div>
  );
}
