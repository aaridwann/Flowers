import mongoose from "mongoose";

const url = process.env.DB_HOST
const options = {
    maxPoolSize: 2, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    connectTimeoutMS: 10000,
}

export default async function ConnectionDb() {

    const check = mongoose.connection.readyState
    if (check) return console.log('has connected');
    console.log('not yet connect');
    try {
        await mongoose.connect(url, options)
        return console.log('database Connect');
    } catch (err) {
        return console.log(err);
    }
}