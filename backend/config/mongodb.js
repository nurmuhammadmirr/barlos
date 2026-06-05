import mongoose, { mongo } from "mongoose";

const connectDB = async ()=> {
    console.log("Попытка подключения к:", process.env.MONGODB_URI);
    mongoose.connection.on('connected' , ()=> console.log('database connected '));

    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB