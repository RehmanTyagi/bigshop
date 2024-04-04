import { useForm } from 'react-hook-form';
import { brandInfo } from "../../../brandInfo";
import Input from '../../Common/Input/Input';
import Button from '../../Common/Button/Button';
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data, errors)
    }
    return (
        <div className="grid place-items-center m-auto max-md:w-auto w-96 loginPage md:bg-white">
            <p>{brandInfo.brandName}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 border-2 max-md:border-none rounded-md p-7">
                <h4 className="text-2xl font-semibold">Sign in</h4>
                <div className="grid gap-1 max-md:gap-3">
                    <Input type="email" name="email" placeholder="Email or phone number required!" label="Email or mobile phone number" labelClassName="max-md:hidden" className="mt-2 placeholder:text-xs max-md:bg-transparent max-md:placeholder:text-white max-md:outline-none max-md:p-3 max-md:text-white" inputRegister={register("email", { required: "Email is required" })} />
                    <Button type="submit" className="mt-2 rounded text-xs hover:bg-red-600">Continue</Button>
                </div>
                <p className="text-xs font-medium max-md:text-center">By continuing, you agree to {brandInfo.brandName} <Link>Conditions of Use</Link> and <Link>Privacy Notice.</Link></p>
                <p className="text-xs font-medium">Need help? <Link>Forgot Password</Link></p>
                <div className="grid grid-cols-[1fr,auto,1fr] gap-3">
                    <hr className="mt-2" />
                    <p className="text-xs font-medium text-center">New to {brandInfo.brandName}? </p>
                    <hr className="mt-2" />
                </div>
                <Link className="text-xs max-md:text-white md:text-black hover:bg-gray-50 hover:no-underline border-[1px] border-gray-300 p-1.5 rounded text-center shadow-inner">Create your {brandInfo.brandName} account!</Link>
            </form>
        </div>
    )
}

export default Login;
