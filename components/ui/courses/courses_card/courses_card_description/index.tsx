
export function CoursesCardDescription({
  description,
}: {
  description: string;
}) {
  return (
    <span className="text-[var(--primary-text-color)] font-normal">
      {description}
    </span>
  );
}