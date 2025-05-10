import Image from "next/image";

export function PricesCardHeaderTitle({ title }: { title: string }) {
  return (
    <div className="flex gap-2 items-center justify-center bg-[var(--primary-text-color)] p-2 rounded-3xl w-3/6">
      <Image
        alt="Simbolo de +"
        src="/plus.png"
        width={24}
        height={24}
        priority
      />
      <h1 className="text-2xl font-bold text-white">{title}</h1>
    </div>
  );
}
