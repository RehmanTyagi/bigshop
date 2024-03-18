const Input = ({ icon, type, placeholder, focus, className, onChange, maxLength, value, required, name, inputRegister }) => {
    return (
        <div className="flex items-center border-2 border-gray-200 rounded bg-gray-100 gap-1">
            <span className="text-lg  px-2">{icon}</span>
            <input {...inputRegister} value={value} name={name} maxLength={maxLength} onInput={onChange} type={type} required={required} autoFocus={focus} placeholder={placeholder}
                className={`${"w-full outline-none p-2 placeholder:text-gray-400 font-semibold"} ${className}`} />
        </div>
    )
}
export default Input
