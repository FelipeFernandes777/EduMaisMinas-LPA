import { BenefitsCardDescription } from "./benefits_card_description";
import { BenefitsCardImage } from "./benefits_card_image";
import { BenefitsCardTitle } from "./benefits_card_title";

interface BenefitsCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function BenefitsCard({alt,src,title,description}: BenefitsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[300px] bg-white p-4 rounded-lg shadow-md gap-5 min-sm:w-5/6 min-md:w-full">
      <BenefitsCardImage alt={alt} src={src}/>
      <BenefitsCardTitle title={title}/>
      <BenefitsCardDescription description={description}/>
    </div>
  )
}