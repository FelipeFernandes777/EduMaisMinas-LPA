export function BenefitsContainerCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-4 min-md:grid min-md:grid-cols-2 min-md:place-items-center ">
      {children}
    </div>
  );
}
