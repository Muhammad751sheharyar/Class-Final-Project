import axios from 'axios';
import { useEffect, useState } from 'react';
import "./UpdateProduct.css";
import { Link,useParams } from 'react-router-dom';

function UpdateProduct() {

    const users = {
        productName: "",
        Categry: "",
        Price: ""
    }

    const [user, setUser] = useState(users);
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/get${id}`)
        .then((responce)=>{
            setUser(responce.data)

        }).catch((err)=>{

            console.log(err)
        })
    },[id])

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(name, value)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const newData = await axios.post("http://localhost:3000/api/CreateProduct", user)
            .then(() => {
                console.log("product add successfully")
            }).catch((err) => {
                console.log("product not created")
                err
            })
        console.log(newData)
    }

    return (
        <div className="container">
            <Link to="/">Go Back</Link>
            <form onSubmit={submitForm} className="form-card">
                <h2 className="form-title">Add New Product</h2>

                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        value={user.productName}
                        name="productName"
                        onChange={inputHandler}
                        placeholder="Enter product name"
                    />
                </div>

                <div className="form-group">
                    <label>Product Category</label>
                    <input
                        type="text"
                        name="Categry"
                        value={user.name}
                        id="Categry"
                        onChange={inputHandler}
                        placeholder="Enter category"
                    />
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="text"
                        id="Price"
                        value={user.Price}
                        name="Price"
                        onChange={inputHandler}
                        placeholder="Enter price"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default UpdateProduct;