import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios"

export function ShowData() {
    const [users, setUser] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const responce = await axios.get("http://localhost:3000/api/get")
                setUser(responce.data.productFind)
                console.log(responce.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])
console.log(users)
    return (

        <div>
            {/* <h1>{JSON.stringify(users)}</h1> */}
             <h2>Total: {users.length}</h2>

            {users.map((item) => (
                <div key={item._id}>
                    {item.productName} - {item.Price}
                </div>
            ))}
        
        </div>

    )
}

// module export=  ShowData