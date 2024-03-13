// components
import { Outlet } from 'react-router-dom'

const Login = () => {
    return (
        <div className="text-sm h-dvh lg:grid lg:grid-cols-[auto,600px]">
            <div className="bg-gray-400 max-lg:hidden"><img className="h-full w-full" src="/loginPage.jpeg" /></div>
            <div className="grid relative place-items-center h-full py-5 px-20 max-sm:px-5">
                <Outlet />
            </div>

        </div>
    )
}

export default Login
