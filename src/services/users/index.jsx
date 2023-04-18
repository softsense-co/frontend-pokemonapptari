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
            <div key={data.id} className='flex flex-col items-center'>
                <p className='pb-1 font-semibold' >
                    {data?.first_name} {data?.last_name}
                </p>
                <img alt='' key={data?.avatar} src={data?.avatar} />
                <p className='pt-2'>{data?.email}</p>
            </div>

        );
    })

    return (
        <div>
            <Header />
            <div>
                <div className='bg-white/50 my-10 rounded-3xl shadow-2xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl'>
                    <h1 className='text-3xl font-extrabold text-center py-9 text-slate-600'>Users</h1>
                    <div >
                        <div className='grid grid-cols-2 md:grid-cols-3  gap-7 pb-12 px-8'>
                            {arrUser}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IndexUser