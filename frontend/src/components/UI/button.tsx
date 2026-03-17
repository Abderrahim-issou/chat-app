


type ButtonProps = {
  handleClick?: () => void;
  text: string;
} & React.InputHTMLAttributes<HTMLInputElement>;


const Button = (props: ButtonProps) => {
    return(
        <button className="w-full flex justify-center items-center border-none py-3 rounded-sm bg-[#31177f] font-semibold mt-5 mb-7">
            {props.text}
        </button>
    )
}

export default Button;