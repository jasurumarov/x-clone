import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  let userData = JSON.parse(localStorage.getItem('user-data'))

  const navigate = useNavigate()

  const handleLogout = () => {
    if (window.confirm('Are you sure?')) {
      localStorage.clear()
      navigate('/register')
    }
  }
  return (
    <section className='container flex justify-between items-center'>
      <h2 className='mt-10 text-white capitalize text-4xl'>{userData.role}: {userData.FirstName} {userData.LastName}</h2>
      <button onClick={() => handleLogout()} className='text-colorBlack rounded w-28 h-10 mt-11 hover:opacity-80 duration-200 pb-1 active:scale-95 font-semibold bg-colorWhite'>Log out</button>
    </section>
  )
}

export default Hero
