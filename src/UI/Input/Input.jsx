const Input = ({ type, placeholder, focus, className, onInput, maxLength }) => {
    return (
        <input maxLength={maxLength} onInput={onInput} type={type} autoFocus={focus} placeholder={placeholder}
            className={`${"w-full outline-none border-b-2 p-2 placeholder:text-gray-400 font-semibold"} ${className}`} />
    )
}

export default Input
