
export function CoursesCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full h-[200px] p-4 shadow-md border border-gray-100">
      {children}
    </div>
  );
}