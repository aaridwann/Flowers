import mongoose from "mongoose";

const url = process.env.DB_HOST

export default async function ConnectionDb() {

    const check = mongoose.connection.readyState
    if (check) return
    try {
        await mongoose.connect(url)
        return console.log('database Connect');
    } catch (err) {
        return console.log(err);
    }
}