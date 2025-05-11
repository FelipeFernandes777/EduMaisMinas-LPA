import Image from "next/image";

export function BenefitsCardImage({src,alt}: {src: string, alt: string}) {
  return(
    <div className="flex items-center justify-center w-full h-auto">
    <Image
      src={src}
      alt={alt}
      width={112}
      height={112}
      className="object-cover w-28 h-28 rounded-full min-sm:w-40 min-sm:h-40"
    />
  </div>
  )
}