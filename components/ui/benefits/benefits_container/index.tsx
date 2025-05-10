
export function BenefitsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100 p-4 gap-4" id="beneficios">
      {children}
    </div>
  );
}