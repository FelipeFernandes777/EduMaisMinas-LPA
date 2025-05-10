export function CoursesTitle({title}: {title: string}) {
  return (
    <h1 className="text-4xl font-bold text-[var(--primary-text-color)]">
      {title}
    </h1>
  );
}