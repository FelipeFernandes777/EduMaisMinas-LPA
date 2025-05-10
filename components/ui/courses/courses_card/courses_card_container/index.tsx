
export function CoursesCardContainer ( {children} : {children: React.ReactNode} ) {
  return (
    <div className="w-full shadow-md bg-white rounded-lg h-[400px] border border-black/5 flex flex-col gap-3">
      {children}
    </div>
  );
}