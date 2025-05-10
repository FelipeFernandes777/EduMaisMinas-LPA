import { ReactNode } from "react"

export function MainHeaderContainer({children}: {
  children: ReactNode
}) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-white gap-2 sticky">
      {children}
    </div>  
  )
}