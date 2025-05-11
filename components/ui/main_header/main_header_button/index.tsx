import Image, { StaticImageData } from "next/image";

interface IMainHeaderButton {
  title: string;
  color: "green" | "pink";
  icon: string | StaticImageData;
  hasIcon: boolean;
}

export function MainHeaderButton({
  title,
  color,
  icon,
  hasIcon,
}: IMainHeaderButton) {
  return (
    <button
      className={`flex items-center justify-center ${
        hasIcon ? "gap-3" : null
      } ${
        color == "green" ? "bg-[#16A34A]" : "bg-[#E91C59]"
      } p-2 rounded-md w-full font-medium text-white text-[17px] min-sm:text-2xl min-md:w-3/5 min-md:text-xl`}
    >
      {title}
      {hasIcon ? (
        <Image
          alt="Ícone do botão"
          src={icon}
          width={25}
          height={25}
          className="w-1/12 h-auto"
        />
      ) : null}
    </button>
  );
}
