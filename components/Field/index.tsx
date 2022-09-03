export default function Field(props: any) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props} />
    </div>
  )
}