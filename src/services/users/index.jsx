import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header'

const IndexUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                console.log(response)
                setUser(response.data.data)
            }).catch(error => console.log(error))
    }, [])

    const arrUser = user.map((data) => {
        return (
            <div>
                <p className='py-1' key={data.id}>
                    {data?.first_name} {data?.last_name}
                </p>
            </div>

        );
    })

    return (
        <div>
            <Header />
            <div>
                <div className='bg-white/50 my-10 py-3 rounded-3xl shadow-2xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl'>
                    <h1 className='text-3xl font-extrabold text-center py-5 text-slate-600'>Users</h1>
                    <p className='mx-16 pb-7'>
                        {arrUser}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default IndexUser