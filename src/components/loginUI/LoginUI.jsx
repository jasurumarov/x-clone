import React, { useEffect, useState } from 'react'
import Model from '../model/Model'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

// Icons
import { FaXTwitter } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { GrApple } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'

const LoginUI = () => {
    let [signinModel, setSigninModel] = useState(false)
    let [signupModel, setSignupModel] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('x-auth-token')) {
            navigate('/')
        }
    }, [])

    return (
        <section className='container h-[100vh] flex items-center justify-between '>
            <FaXTwitter className='text-[#e7e9ea] text-[382px]' />
            <div>
                <h2 className='text-colorWhite font-bold text-7xl mb-12'>Happening now</h2>
                <h3 className='text-colorWhite font-bold text-[32px] mb-8'>Join today.</h3>
                <div className='flex flex-col gap-2 max-w-[300px]'>
                    <button className='bg-white w-full h-[38px] rounded-3xl flex items-center justify-center gap-2 font-semibold text-colorBlack hover:opacity-85 duration-150'><FcGoogle className='text-xl' /> Sign up with Google</button>
                    <button className='bg-white w-full h-[38px] rounded-3xl flex items-center justify-center gap-2 font-semibold text-colorBlack hover:opacity-85 duration-150'><GrApple className='text-xl' /> Sign up with Apple</button>
                    <div className='max-w-[300px] grid items-center grid-cols-[4fr_1fr_4fr]'>
                        <div className='w-full bg-[#2f3336] h-[1px]'></div>
                        <p className='text-colorWhite text-center pb-1'>or</p>
                        <div className='w-full bg-[#2f3336] h-[1px]'></div>
                    </div>
                    <button onClick={() => setSignupModel(true)} className='w-full rounded-3xl h-[38px] bg-colorBlue text-white font-semibold hover:opacity-90 duration-150'>Create account</button>
                    {
                        signupModel ?
                            <Model close={setSignupModel}>
                                <SignUpForm />
                            </Model>
                            : <></>
                    }
                    <p className='text-[#666a6f] text-[12px] mb-[50px] leading-3'>By signing up, you agree to the <Link to={'/tos'} target='_blank' className='text-colorBlue hover:underline'>Terms of Service</Link> and <Link to={'privacy'} target='_blank' className='text-colorBlue hover:underline'>Privacy Policy</Link>, including <Link to={'/x-cookies'} className='text-colorBlue hover:underline'>Cookie Use.</Link></p>
                    <h4 className='text-colorWhite font-bold tracking-wide text-[17px] mb-3'>Already have an account?</h4>
                    <button onClick={() => setSigninModel(true)} className='mb-2 w-full rounded-3xl h-[38px] font-semibold text-colorBlue border-[#536471] border pb-1 hover:bg-[#1d9bf01a] duration-150'>Sign in</button>
                    {
                        signinModel ?
                            <Model close={setSigninModel}>
                                <SignInForm />
                            </Model>
                            : <></>
                    }
                </div>
            </div>
        </section>
    )
}

export default LoginUI
