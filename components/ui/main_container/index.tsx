
export default function MainContainer({children}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-white gap-2 max-w-screen overflow-hidden p-4">
      {children}
    </div>  
  )
}