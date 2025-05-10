import Image from "next/image"

interface IMainHeaderButton {
  title: string,
  color: string
  icon: string
  hasIcon: boolean
}

export function MainHeaderButton({title,color,icon,hasIcon}: IMainHeaderButton) {
  return (
    <button className={`flex items-center justify-center ${hasIcon ? "gap-3" : null} ${color == "green" ? "bg-[#16A34A]" : "bg-[#E91C59]"} p-2 rounded-md w-full font-medium text-white`}>
      {title}
      {
        hasIcon ? (<Image  alt="Trevo" src={icon}/>) : null
      }
    </button>
  )
}