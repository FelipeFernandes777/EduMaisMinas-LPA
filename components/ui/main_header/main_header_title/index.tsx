
interface IMainHeaderTitleProps {
  title: string,
}

export function MainHeaderTitle({title}: IMainHeaderTitleProps){
  return (
    <span className="text-black font-medium">
      {title.toUpperCase()}
    </span>
  )
}