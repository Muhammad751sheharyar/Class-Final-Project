const UserModel = require("../model/dbSchema");
const bcrypt = require("bcrypt");
const env = require("dotenv")
const jwt = require("jsonwebtoken")
const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const findUser = UserModel.findOne({ email })
        // console.log(findUser);
        // if (findUser) {
        //   return res.send({
        //         message: "user alreay exist",
        //         status: 202
        //     })
        // }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new UserModel({ name, email, password: hash })
        newUser.save()
        res.send({
            message: "user succesfully Created",
        })
        // console.log(name)
    } catch (err) {
        res.send(err)
    }
}
const Login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).json({
            Message: "email and password incorrect"
        })
    }
    const UserFind = await bcrypt.compare(password, user.password)
    if (!UserFind) {
        return res.status(404).json({
            Message: "email and password incorrect"
        })
    }
    res.send({
        message: "user login successfully",
        user
    })
    console.log(user);
    const token = jwt.sign({
        id: user._id,
        email: user.email
    },
        process.env.JWT_SECRET, {
        expiresIn: '1h'
    }
)
console.log(token);
    res.Cookie('acess tocken', token
        ,{
            httpOnly: true,
            secure: false, // true sirf https me
            maxAge: 24 * 60 * 60 * 1000
        }
    );

}
module.exports = { Signup, Login }