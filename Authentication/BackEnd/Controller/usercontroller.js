import bcrypt from 'bcrypt';
import User from '../Model/user.js';
import  jwt  from 'jsonwebtoken';
const secret = "test";

export const signUp = async (req,res) => {
    const {firstname,lastname,username,email,password} = req.body;

    try{
        const oldUser = await User.findOne({username});
        if(oldUser){
            return res.status(404).json({message: "User already exist...!!!"})
        }
        const encryptPassword = await bcrypt.hash(password,12);

        const result = await User.create({ firstname,lastname,username,email,password : encryptPassword })

        res.status(201).json({result, message: "User Created...!!!"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Something Went Wrong...!!!"});
    }
}
export const show = async (req,res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
    }
    catch(error){
        console.error(err.message);
    }
}

export const signIn = async(req,res) => {
    try{
        const {username,password} = req.body;
        const oldUser = await User.findOne({username});
        if(!oldUser){
            return res.status(404).json({message: " Invalid User...!!!"});
        }

        const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(!isPasswordCorrect){
            return res.status(404).json({message: " Invalid Password...!!! "});
        }

        const token = jwt.sign(
            { email: oldUser.username, id: oldUser._id },
            secret,
            { expiresIn: "1h" }
        );
        res.status(200).json({ accessToken: oldUser, token });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message: "Something Went Wrong...!!!"});
    }
}

