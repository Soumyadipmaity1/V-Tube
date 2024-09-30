import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {

    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MONGO DB connected !! DB host: ${connectionInstance.connection.host} \n`);
      
      ;
    } catch (error) {
        console.log("Connection error MOngodb",error);
        process.exit(1);
    }

}

export default connectDB;