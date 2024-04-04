// components
import { Link, Outlet } from 'react-router-dom'
const AuthScreen = () => {
    return (
        <div className="bg-loginBG bg-[rgb(0,0,0,0.5)] bg-cover bg-center bg-blend-darken md:p-20">
            <Link className="text-white uppercase font-semibold text-right p-4 block md:hidden">Skip</Link>
            <Outlet />
        </div>
    )
}

export default AuthScreen
