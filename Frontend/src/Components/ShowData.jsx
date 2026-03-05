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
            <Link to="/adduser" className='AddProduct'>Add Product</Link>

            <div className="product-grid">
                {users.map((item) => (
                    <div key={item._id} className="product-card">
                        <div className="card-content">
                            <h3 className="product-name">{item.productName}</h3>
                            <p className="product-price">Rs. {item.Price}</p>
                            <div className='ButtonMain'><div><Link to="UpdateProduct"className="Update">Update</Link></div>
                                <div className="Delete">Delete</div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}