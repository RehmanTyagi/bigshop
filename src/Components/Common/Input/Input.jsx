
const Input = ({ type, placeholder, focus, className, onChange, maxLength, value, name, inputRegister, label, errorMessage, labelClassName }) => {
    return (
        <div>
            <label htmlFor={name} className={`text-xs font-bold line-clamp-3 ${labelClassName}`}>{label}</label>
            <input {...inputRegister} value={value} name={name} maxLength={maxLength} onInput={onChange} type={type} autoFocus={focus} placeholder={placeholder}
                className={`${"block w-full rounded border-0 p-1.5 text-sm font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"} ${className}`} />
            {
                errorMessage && <span className="text-xs text-red-500 font-semibold">{errorMessage}</span>
            }
        </div>
    )
}

export default Input;