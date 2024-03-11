const Button = ({ children, onClick, className }) => {
    return (<button className={`${'p-3 rounded-md text-white font-semibold w-full bg-[color:var(--primaryColor)]'} ${className}`} onClick={onClick}>{children}</button>)
}

export default Button
