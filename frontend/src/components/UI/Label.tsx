


type labelProps = {
    text: string;
    id?: string
}

const Label = (props: labelProps) => {
  return (
    <label htmlFor={props.id && props.id} className="tracking-wide mb-2 mt-6">
        {props.text}
    </label>
  )
}

export default Label;
