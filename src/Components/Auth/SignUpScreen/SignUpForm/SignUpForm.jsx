import { Link } from "react-router-dom"
import Button from "../../../Common/Button/Button"
import ErrorMessage from "../../../Common/ErrorMessage/ErrorMessage"
import { FiUser } from "react-icons/fi"
import { BsCalendar2Date } from "react-icons/bs"
import { MdOutlineMail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { TbPasswordFingerprint } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import Input from '../../../Common/Input/Input'
import { selectFormData, updateFormData } from "../../../../Store/formSlice"
import { capitalLetterConverter, smallLetterConverter } from "../../../../Utility/capitalizeWords"
import { useRef } from "react"

const SignUpForm = () => {

    const dispatch = useDispatch()
    const formData = useSelector(selectFormData)
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const passwordRef = useRef({})
    passwordRef.current = watch('password', '')

    // form input types
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'First name and Last name',
            icon: <FiUser />
        },
        {
            id: 2,
            name: 'age',
            type: 'date',
            placeholder: 'Date of Birth',
            icon: <BsCalendar2Date />
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            icon: <MdOutlineMail />
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            icon: <RiLockPasswordLine />
        },
        {
            id: 5,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'confirmPassword',
            icon: <TbPasswordFingerprint />
        },
    ]

    const inputHandler = (e) => {
        const { name, value } = e.target
        dispatch(updateFormData({ ...formData, [name]: value }))
    }

    const handleOnSubmit = (data) => {
        const capitalizeUserName = capitalLetterConverter(data.username)
        const smallLetterEmail = smallLetterConverter(data.email)
        dispatch(updateFormData({ ...data, username: capitalizeUserName, email: smallLetterEmail }))
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="grid gap-3 px-10 max-sm:px-5 max-sm:gap-4">
            <img src="assets/logo/logoColor.svg" className="h-20 size-32 max-sm:w-50 max-sm:h-auto max-lg:m-auto " />
            <h1 className="text-2xl font-bold">Create an account in order to shop!</h1>
            <p className="font-medium">setup your free account and shop on the 24-hour online platform. Enjoy using BigShop.</p>
            {
                inputs.map(input => <div key={input.name}>

                    <Input inputRegister={input.name === 'confirmPassword' ? { ...register(input.name, { required: 'This field is required!', validate: value => value === passwordRef.current || "The passwords do not match" }) } : { ...register(input.name, { required: 'This field is required!' }) }} onChange={inputHandler} value={formData[input.name] || ''} className={`${input.name === 'username' && 'capitalize'} ${errors[input.name] && 'bg-red-100'}`} icon={input.icon} key={input.id} type={input.type} name={input.name} placeholder={input.placeholder} />
                    {
                        errors[input.name] && <ErrorMessage error={errors[input.name].message} />
                    }
                </div>)
            }
            <Button type="submit" className="flex bg-[color:var(--primaryColor)] justify-center items-center text-white">SignUp</Button>
            <p className="text-sm font-medium">By continuing, you acknowledge that you have accepted the BigShop <Link className="underline text-sky-400 font-semibold">Conditions of Use</Link> and <Link className="underline text-sky-400 font-semibold">Privacy Notice</Link>.</p>
            <div className="flex mb-2 gap-2 font-semibold"><p>Already have an account?</p><Link className="text-[color:var(--primaryColor)] font-semibold" to="/login">Login</Link></div>
        </form>
    )
}

export default SignUpForm
