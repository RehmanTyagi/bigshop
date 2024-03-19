import { Link } from "react-router-dom"
import Button from "../../../Common/Button/Button"
import Input from "../../../Common/Input/Input"
import { BeatLoader } from "react-spinners"
import { MdLockReset } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, selectFormData } from "../../../../Store/formSlice";
import { smallLetterConverter } from "../../../../Utility/capitalizeWords";
import ErrorMessage from "../../../Common/ErrorMessage/ErrorMessage";
import { useState } from "react";
import { DataTypeConverter } from "../../../../Utility/TypeOfConverter";

const ForgetPassword = () => {
    const [input, setInput] = useState('')
    const [inputError, setInputError] = useState('')
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    //  handle submit form
    const handleOnSubmit = (data) => {
        const valueType = typeof DataTypeConverter(data?.text)

        if (valueType == 'string' && !data.text.includes('@')) {
            setInputError('Please include @ in your email')
        } else {
            setInputError('')
            console.log(data)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleOnSubmit)} className="grid gap-5 max-sm:gap-4">
                <img src="/assets/logo/logoColor.svg" className="h-32 size-32 max-sm:w-50 max-sm:h-auto max-sm:m-auto max-sm:mb-5 " />
                <h1 className="text-2xl font-bold">Reset Pass Code!</h1>
                <p className="font-medium">{"Don't"} worry! Easily forget your password and access your account.</p>
                <p className="font-medium text-sm">Enter your email below to reset your password</p>
                <div>
                    <Input onChange={({ target }) => setInput(target.value)} value={input} name={'text'} inputRegister={register('text', { required: 'Email or Phone number required!' })} icon={<MdLockReset />} placeholder="Email or mobile phone number" />
                    {
                        errors.text && <ErrorMessage error={errors.text.message} />
                    }
                    {
                        inputError && <ErrorMessage error={inputError} />
                    }
                </div>
                <Button type="submit" className="flex bg-[color:var(--primaryColor)] justify-center items-center text-white">Send Code</Button>
                <p className="font-semibold text-sm">Has your email address or mobile phone number changed?</p>
                <p className="text-xs mb-2 font-medium">In case you no longer use the email address linked to your BigShop account, <Link className="underline text-sky-400 font-semibold">Customer Care</Link> can help you regain access to your account.</p>
                <div className="flex justify-between"><span className="flex items-center gap-2"><p className="max-sm:hidden">New to BigShop?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/signup">Sign Up</Link></span><Link to="/login" className="text-[color:var(--primaryColor)] font-semibold">Back to Login</Link></div>
            </form>
        </div>
    )
}

export default ForgetPassword
