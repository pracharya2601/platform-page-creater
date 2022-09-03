export default function Button(props: any) {
  return (
    <button {...props}>
      {props.title}
    </button>
  )
}