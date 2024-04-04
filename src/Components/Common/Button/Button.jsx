const Button = ({ children, onClick, className, disabled, type }) => {
    return (
        <button type={type} disabled={disabled} className={`${`${disabled ? 'cursor-not-allowed' : ''} rounded font-medium p-2 bg-primaryColor text-white text-sm`} ${className}`} onClick={onClick}>{children}</button>
    )
}

export default Button
