import mongoose from "mongoose";

const mongoURI: string = "mongodb://localhost:27017/Typescript-Api";

export const mongoServer = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("connected to db!!!");
  } catch (e: any) {
    console.log(e);
  }
};
