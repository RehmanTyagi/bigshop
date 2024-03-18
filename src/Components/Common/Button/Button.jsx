const Button = ({ children, onClick, className, disabled, type }) => {
    return (
        <button type={type} disabled={disabled} className={`${`p-2 ${disabled ? 'cursor-not-allowed' : ''} rounded-md font-semibold w-full`} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button
