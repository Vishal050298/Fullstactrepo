import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.js';
import 'dotenv/config';

const secret = process.env.SECRET;

export const signUp = async (req, res) => {
    
    const user = req.body;
     console.log(user);

    const { name, username, password } = user;


    try {
        const olduser = await User.findOne({ username });
        //console.log(olduser);
        if (olduser) {
            return res.status(404).json({ message: "user already exit!" })
        }
        const encryptPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ name, username, password: encryptPassword })
        

        res.status(201).json({ result, message: "user created!" });

    }
    catch (err) {
        //console.log(err);
        res.status(500).json({ message: "something went wrong!!" })
    }
}



export const signIn = async (req, res) => {
    try {
        const user = req.body;
        //console.log(user);
        const { username, password } = user;

        const olduser = await User.findOne({ username });
       
        if (!olduser) {
            return res.status(404).json({ message: "User does not exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, olduser.password)
        if (!isPasswordCorrect) {
            console.log()
            return res.status(400).json({ message: "Invalid password" })
        }

        const token = jwt.sign(
            { email: olduser.username, id: olduser._id }, secret, { expiresIn: "5h" }
        );

        res.status(200).json({ accessToken: olduser, token })
    }
    catch (err) {
        res.status(500).json({ message: "something went worng!!" })
    }
}

