const CopyRight = () => {
    const currentYear = new Date().getFullYear()
    return (
        <p className=" font-medium bg-sky-200 p-1 text-center text-xs">© - {currentYear} BigShop an online shopping platform.</p>
    )
}

export default CopyRight
