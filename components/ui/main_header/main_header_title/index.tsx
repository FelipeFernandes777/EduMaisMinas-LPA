
interface IMainHeaderTitleProps {
  title: string,
  id: string
}

export function MainHeaderTitle({title, id}: IMainHeaderTitleProps){
  return (
    <a href={"#" + id} className="text-[var(--primary-text-color)] max-sm:font-normal font-medium cursor-pointer min-sm:text-xl">
      {title.toUpperCase()}
    </a>
  )
}