import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../../api'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import { FaXTwitter } from 'react-icons/fa6'
import { toast } from 'react-toastify'

// InitialState
const initialState = {
    UserName: "",
    password: "",
}

const SignInForm = () => {
    const { formData, setFormData, handleChange } = useGetInputValue(initialState)

    const navigate = useNavigate()

    const handleSignin = e => {
        e.preventDefault()
        axios
            .post('/auth/sign-in', formData)
            .then(res => {
                localStorage.setItem("x-auth-token", res.data.data.token)
                localStorage.setItem("user-data", JSON.stringify(res.data.data.user))
                navigate("/")
                toast.success(res.data.message)
            })
            .catch((err) => toast.success('Username or password is incorrect.'))

    }
    return (
        <>
            <FaXTwitter className='text-colorWhite text-[32px]' />
            <form onSubmit={handleSignin}>
                <h2 className='text-colorWhite font-bold text-3xl tracking-wide my-7'>Sign in to X</h2>
                <input required onChange={handleChange} value={formData.UserName} name='UserName' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-6 rounded text-colorWhite focus:border-none' type="text" placeholder='Username' />
                <input required onChange={handleChange} value={formData.password} name='password' className='bg-transparent border border-[#333639] h-14 px-3 w-full mb-8 rounded text-colorWhite focus:border-none' type="password" placeholder='Password' />
                <button className='h-[38px] w-full rounded-3xl bg-colorWhite text-[#0f1419] font-semibold mb-6 border border-colorWhite  pb-[2px] hover:opacity-85 duration-150'>Next</button>
                <button className='h-[38px] w-full rounded-3xl bg-transparent hover:bg-[#eff3f41a] text-colorWhite font-semibold border border-[#536471] pb-[2px] duration-200'>Forgot password?</button>
                <p className='text-[#71767b] text-[16px] mt-[52px]'>Don't have an account? <Link className='text-colorBlue' to={'/register'}>Sign up</Link></p>
            </form>
        </>
    )
}

export default SignInForm
