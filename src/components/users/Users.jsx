import React, { useEffect, useState } from 'react'
import axios from '../../api'

const Users = () => {
    const [usersData, setUsersData] = useState(null)
    useEffect(() => {
        axios
            .get('/users/search/?limit=1000')
            .then(res => setUsersData(res.data.data.users))
    }, [])
    console.log(usersData);
    return (
        <section className='container mb-16'>
            <h2 className='text-colorWhite mt-10 text-3xl'>Users</h2>
            <div className='flex flex-wrap gap-14 mt-5'>
                {usersData?.map(user => (
                    <div className='max-w-[128px] '>
                        <div className='bg-colorWhite w-32 h-32 rounded flex items-center justify-center'>128x128</div>
                        <h3 className='text-colorWhite text-center break-all text-[17px]'>{user.FirstName} {user.LastName}</h3>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Users
