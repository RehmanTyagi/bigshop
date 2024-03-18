import { IoPhonePortraitOutline } from "react-icons/io5"
import Button from "../../../Common/Button/Button"
import Input from "../../../Common/Input/Input"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import ErrorMessage from "../../../Common/ErrorMessage/ErrorMessage"
import { FiUser } from "react-icons/fi";
import { TbPasswordUser } from "react-icons/tb";
// import { BeatLoader } from "react-spinners"
const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            icon: <FiUser />
        }, {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: <TbPasswordUser />
        },
    ]

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="grid gap-3 max-sm:gap-4">
            <img src="/assets/logo/logoColor.svg" className="h-32 size-32 max-sm:w-50 max-sm:h-auto max-sm:m-auto max-sm:mb-5 " />
            <h1 className="text-2xl font-bold">Login to Access Orders</h1>
            <p className="font-medium">Welcome back! Please use your email or another service to sign in.</p>
            {
                inputs.map(input => <div key={input.name}>

                    <Input inputRegister={{ ...register(input.name, { required: 'This field is required!' }) }} className={`${errors[input.name] && 'bg-red-100'}`} icon={input.icon} key={input.id} type={input.type} name={input.name} placeholder={input.placeholder} />
                    {
                        errors[input.name] && <ErrorMessage error={errors[input.name].message} />
                    }
                </div>)
            }
            <Button className="flex bg-[color:var(--primaryColor)] justify-center items-center text-white">Login</Button>
            <p className="text-sm mb-2 font-medium">By continuing, you acknowledge that you have accepted the BigShop <Link className="underline text-sky-400 font-semibold">Conditions of Use</Link> and <Link className="underline text-sky-400 font-semibold">Privacy Notice</Link>.</p>
            <div className="flex gap-5 items-center">
                <hr className="w-full border-gray-200 border-b-2" />
                <p className="text-gray-300">or</p>
                <hr className="w-full border-gray-200 border-b-2" />
            </div>
            <Button className="grid grid-cols-[10px,1fr] items-center hover:bg-gray-50 bg-white border-2"><IoPhonePortraitOutline /><Link to="phoneLogin">Continue with Phone</Link></Button>
            <div className="flex justify-between"><span className="flex items-center gap-2"><p className="max-sm:hidden">New to BigShop?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/signup">Sign Up</Link></span><Link to="forgot" className="text-[color:var(--primaryColor)] font-semibold">Forgot password?</Link></div>
        </form>
    )
}

export default LoginForm
