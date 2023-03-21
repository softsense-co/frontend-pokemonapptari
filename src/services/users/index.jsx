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
            <p key={data.id}>
              {data?.first_name} {data?.last_name};
            </p>
          );
    })

    return (
        <div>
            <Header />
            <h1>Users</h1>
            {arrUser}


        </div>
    )
}

export default IndexUser