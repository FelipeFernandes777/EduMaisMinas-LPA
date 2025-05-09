
interface IMainHeaderTitleProps {
  title: string,
}

export function MainHeaderTitle({title}: IMainHeaderTitleProps){
  return (
    <span>
      {title.toUpperCase()}
    </span>
  )
}