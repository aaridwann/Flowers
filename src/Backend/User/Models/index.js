import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 3, max: 30 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    state: { type: Boolean, default: false }
})

const UserDb = models.user || mongoose.model('user', userSchema)
export default UserDb