import axios from 'axios';
import  { useState } from 'react'

function AddUser() {

    const users = {
        productName: "",
        Categry: "",
        Price: ""
    }
    const [user, setUser] = useState(users);
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
        console.log(user)
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                productName
                <input type="text"
                    id="productName"
                    name=" productName"
                    onChange={inputHandler}
                /><br /><br />
                productCategry
                <input type="text"
                name='Categry'
                    id="Categry"
                    onChange={inputHandler}


                /><br /><br />
                price
                <input type="text"
                    id="Price"
                    name=' Price'
                    onChange={inputHandler}

                /><br /><br />
                <button type="submit">add</button>

            </form>
        </div>
    )
}

export default AddUser
