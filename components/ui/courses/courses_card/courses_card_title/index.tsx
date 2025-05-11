export function CoursesCardTitle({ title }: { title: string }) {
  return (
    <span className="text-[var(--primary-text-color)] text-lg font-bold w-[180px] px-2 min-sm:text-xl min-sm:w-full">
      {title}
    </span>
  );
}
