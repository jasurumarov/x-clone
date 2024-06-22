import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { FaXTwitter } from 'react-icons/fa6'
import axios from '../../api'
import { toast } from 'react-toastify'

const initialState = {
    FirstName: "",
    LastName: "",
    phones: "",
    UserName: "",
    password: "",
}

const SignUpForm = () => {
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)

    const navigate = useNavigate()

    const handleSignup = e => {
        e.preventDefault()
        formData.phones = [formData.phones]
        axios
            .post("/auth/user/sign-up", formData)
            .then(res => {
                localStorage.setItem("x-auth-token", res.data.data.token)
                navigate("/")
                localStorage.setItem("user-data", JSON.stringify(res.data.data.user))
                toast.success(res.data.message)
            })
            .catch(() => toast.error(res.data.message))

    }
    return (
        <>
            <span>

                <FaXTwitter className='text-colorWhite text-[32px]' />
            </span>
            <form onSubmit={handleSignup}>
                <h2 className='text-colorWhite font-bold text-3xl tracking-wide my-7'>Create your account</h2>
                <div className='flex gap-3'>
                    <input required onChange={handleChange} value={formData.FirstName} name='FirstName' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-4 rounded text-colorWhite focus:border-none' type="text" placeholder='Firstname' />
                    <input required onChange={handleChange} value={formData.LastName} name='LastName' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-4 rounded text-colorWhite focus:border-none' type="text" placeholder='Lastname' />
                </div>
                <input required onChange={handleChange} value={formData.phones} name='phones' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-4 rounded text-colorWhite focus:border-none' type="tel" placeholder='Phone' />
                <input required onChange={handleChange} value={formData.UserName} name='UserName' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-4 rounded text-colorWhite focus:border-none' type="text" placeholder='Username' />
                <input required onChange={handleChange} value={formData.password} name='password' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-8 rounded text-colorWhite focus:border-none' type="text" placeholder='Password' />
                <button className='h-[38px] w-full rounded-3xl bg-colorWhite text-[#0f1419] font-semibold mb-6 border border-colorWhite  pb-[2px] hover:opacity-85 duration-150'>Next</button>
                <button className='h-[38px] w-full rounded-3xl bg-transparent hover:bg-[#eff3f41a] text-colorWhite font-semibold border border-[#536471] pb-[2px] duration-200'>Forgot password?</button>
                <p className='text-[#71767b] text-[16px] mt-[52px]'>Don't have an account? <Link className='text-colorBlue' to={'/register'}>Sign up</Link></p>
            </form>
        </>
    )
}

export default SignUpForm
