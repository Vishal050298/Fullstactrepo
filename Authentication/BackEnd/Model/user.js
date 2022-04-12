import mongoose from "mongoose";
// import autoIncrement from'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password: String
});
// autoIncrement.initialize(mongoose.Connection);
// userSchema.plugin(autoIncrement.plugin,'user');
const User = mongoose.model('user',userSchema);

export default User;