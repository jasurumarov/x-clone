import React from 'react'

// Components
import Hero from '../../components/hero/Hero'
import Users from '../../components/users/Users'

const Home = () => {
    let userData = JSON.parse(localStorage.getItem('user-data'))
    return (
        <main>
            <Hero />
            {
                userData.role === 'admin'
                    ? <Users />
                    : <></>
            }
        </main>
    )
}

export default Home
