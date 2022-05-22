type Props = {
  text: string,
  onClick: any
}
const Button = (props: Props) => {
  return (
    <button onClick={props.onClick} className='mt-4 w-28 h-12 rounded-lg border-2 hover:bg-slate-50 hover:text-slate-900 hover:border-2'>{props.text}</button>
  )
}

export default Button;