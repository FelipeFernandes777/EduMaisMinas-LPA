export function CoursesCardTitle({ title }: { title: string }) {
  return (
    <span className="text-[var(--primary-text-color)] text-lg font-bold bg-gray-200 rounded-2xl w-[150px] flex items-center justify-center p-2">
      {title}
    </span>
  );
}
