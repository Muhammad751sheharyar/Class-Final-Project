// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import axios from "axios"
// import './product.css'
// export function ShowData() {
//     const [users, setUser] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {

//                 const responce = await axios.get("http://localhost:3000/api/get")
//                 setUser(responce.data.productFind)
//                 console.log(responce.data)
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         fetchData()
//     }, [])
//     console.log(users)
//     return (

//         <div>
//             {/* <h1>{JSON.stringify(users)}</h1> */}
//             <h2>Total: {users.length}</h2>

//             {users.map((item) => (
//                 <div key={item._id} className='product'>
//                     <tr>
//                         <div className='singleBOx'>
//                             <div className='single'>{item.productName}</div>
//                             <div> {item.Price}</div>
//                         </div>
//                     </tr>
//                 </div>
//             ))}

//         </div>

//     )
// }

// // module export=  ShowData



import React, { useEffect, useState } from 'react'
import axios from "axios"
import './product.css'
import { Link } from 'react-router-dom';
export function ShowData() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get("http://localhost:3000/api/get");
                setUser(responce.data.productFind);
                console.log(responce.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="container">
            <h2 className="heading">Total Products: {users.length}</h2>
            <Link to="/adduser">Add Product</Link>

            <div className="product-grid">
                {users.map((item) => (
                    <div key={item._id} className="product-card">
                        <div className="card-content">
                            <h3 className="product-name">{item.productName}</h3>
                            <p className="product-price">Rs. {item.Price}</p>
                            <div className='ButtonMain'><div className="Update">Update</div>
                                <div className="Delete">Delete</div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}