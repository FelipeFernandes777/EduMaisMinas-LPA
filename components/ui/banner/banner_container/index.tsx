
export function BannerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-auto">
      {children}
    </div>
  );
}