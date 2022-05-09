import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    user: String,
    password: String,
    id: String

})

const userModel = mongoose.model('userCollection',userSchema)

export default userModel;