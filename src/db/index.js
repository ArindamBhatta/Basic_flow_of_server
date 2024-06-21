import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

console.log("I see dotenv connect or not", process.env.PORT);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
