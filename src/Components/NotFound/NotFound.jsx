import { Link, useNavigate } from "react-router-dom";
const NotFound = ({ errorCode }) => {
    const navigate = useNavigate()
    return (
        <main className="grid h-dvh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="grid h-full place-content-center bg-white px-4">
                <div className="text-center">
                    <h1 className="text-9xl font-black text-gray-200">404</h1>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
                    <p className="mt-4 text-gray-500">We can't find that page.</p>
                    <Link href={navigate(-1)} className="mt-6 inline-block rounded  px-5 py-3 text-sm font-medium text-white bg-black focus:outline-none focus:ring">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound
