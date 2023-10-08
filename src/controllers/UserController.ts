import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/UserModel";

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password,
    });
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

const readUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const result = await User.findById({ _id });
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

const readAllUser = async (req: Request, res: Response) => {
  try {
    const result = await User.find();
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const result = await User.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const _id = req.params.id;
  try {
    const result = await User.findOneAndDelete({ _id });
    res.status(201).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(422).send("Email Not Exist");
  const validPassword = password === user.password;
  if (!validPassword) return res.status(422).send("Wrong Passwrod");

  res.status(200).send("Login successfully");
};

export default {
  createUser,
  readUser,
  readAllUser,
  updateUser,
  deleteUser,
  login,
};
