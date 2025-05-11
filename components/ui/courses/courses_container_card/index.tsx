
export function CoursesCardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full h-[200px] p-4 shadow-md border border-gray-100 min-sm:h-[250px] rounded-2xl min-[769px]:!h-[320px] min-[769px]:flex-col min-[769px]:p-0 overflow-hidden">
      {children}
    </div>
  );
}