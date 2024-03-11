const Input = ({ type, placeholder, focus }) => {
    return (
        <input type={type} autoFocus={focus} placeholder={placeholder} className="w-full outline-none border-b-2 p-2 placeholder-gray-600 text-lg font-medium " />
    )
}

export default Input
