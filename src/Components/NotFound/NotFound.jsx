const NotFound = ({ errorCode }) => {
    return (
        <div className="grid place-items-center h-dvh">
            <div className="grid gap-5 text-center">
                <h1 className="font-extrabold text-3xl">Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p className="text-gray-400">Not Found {errorCode}</p>
            </div>
        </div>
    )
}

export default NotFound
