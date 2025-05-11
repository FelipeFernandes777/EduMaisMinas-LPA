
export function BenefitsCardDescription({description}: {description: string}) {
  return (
    <p className="text-sm text-center text-[var(--primary-text-color)] min-sm:text-[16px] tracking-tight">
      {description}
    </p>
  )
}