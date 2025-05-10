
export function CoursesCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4">
      {children}
    </div>
  );
}