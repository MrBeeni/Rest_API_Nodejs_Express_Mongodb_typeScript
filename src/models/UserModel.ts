import mongoose, { Document, Schema } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  password: string;
}

export interface iUserModel extends iUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<iUserModel>("User", UserSchema);
