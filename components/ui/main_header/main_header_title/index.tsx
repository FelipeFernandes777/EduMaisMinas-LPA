
interface IMainHeaderTitleProps {
  title: string,
}

export function MainHeaderTitle({title}: IMainHeaderTitleProps){
  return (
    <span className="text-black max-sm:font-normal font-medium cursor-pointer">
      {title.toUpperCase()}
    </span>
  )
}