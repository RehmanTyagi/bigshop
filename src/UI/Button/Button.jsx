const Button = ({ children, onClick, className }) => {
    return (<button className={`${'p-2 rounded-md font-semibold w-full bg-[color:var(--primaryColor)]'} ${className}`} onClick={onClick}>{children}</button>)
}

export default Button
