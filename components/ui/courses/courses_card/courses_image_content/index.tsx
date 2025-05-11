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
    <div className="relative w-full h-full group rounded-t-xl overflow-hidden">
      <Image
        alt={alt}
        src={src}
        fill
        className="object-cover rounded-t-xl"
      />
      <div
        className="absolute inset-0 bg-[#1C1B3A]/50 p-4 flex items-center justify-center 
          transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      >
        <p className="text-white text-center">{description_course}</p>
      </div>
    </div>
  );
}