import mongoose from "mongoose";
// import autoIncrement from'mongoose-auto-increment';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String
});
// autoIncrement.initialize(mongoose.Connection);
// userSchema.plugin(autoIncrement.plugin,'user');
const postUser = mongoose.model('user',userSchema);

export default postUser;