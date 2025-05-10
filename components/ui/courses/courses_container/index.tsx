
export function CoursesContainer({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[600px] h-auto gap-4">
      {children}
    </div>
  )
}