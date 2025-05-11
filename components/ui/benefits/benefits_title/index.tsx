export function BenefitsTitle({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold text-center text-[var(--primary-text-color)] min-sm:text-4xl">
      {title}
    </h1>
  );
}
