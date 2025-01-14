import Joi from "joi";

export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const authSchema = Joi.object({
  password: Joi.string().min(6).required(),
  repeatPassword: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

export const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().pattern(emailRegexp).required(),
});

export const updateSchema = Joi.object({
  name: Joi.string().min(3).max(10),
  gender: Joi.string(),
  weight: Joi.number(),
  waterNorm: Joi.number(),
  timeActive: Joi.number(),
  avatarURL: Joi.string(),
});
