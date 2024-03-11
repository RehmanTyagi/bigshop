const Button = ({ children, onClick, className }) => {
    return (<button className={`${'p-3 rounded-md font-semibold w-full bg-[color:var(--primaryColor)]'} ${className}`} onClick={onClick}>{children}</button>)
}

export default Button
