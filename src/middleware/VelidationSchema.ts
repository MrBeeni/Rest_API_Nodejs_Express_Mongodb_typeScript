import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { iUser } from "../models/UserModel";

export const velidateSchema = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      res.status(422).json({ err });
    }
  };
};

export const Schemas = {
  user: {
    create: Joi.object<iUser>({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(4).max(10),
    }),
    update: Joi.object<iUser>({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(4).max(10),
    }),
  },
};
