
export function BenefitsContainerCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-4">
      {children}
    </div>
  );
}