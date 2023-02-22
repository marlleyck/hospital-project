import { Request, Response } from "express";
import { prisma } from "./../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { UserType } from "../@types/UserType";

export function getHello(req: Request, res: Response) {
  return res.send("Hello!");
}

export async function createUser(req: Request, res: Response) {
  const { id, name, email, password, confirmPassword } = req.body;

  // Validations
  if (!id) {
    return res.status(400).send({ error: "ID can't be empty" });
  }

  if (!name) {
    return res.status(400).send({ error: "Name can't be empty" });
  }

  if (!email) {
    return res.status(400).send({ error: "Email can't be empty" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password can't be empty" });
  }

  if (!confirmPassword) {
    return res.status(400).send({ error: "Confirm password can't be empty" });
  }

  // Validate if user already exists
  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (userAlreadyExists) {
    return res.status(400).send({ error: "User already exists!" });
  }

  // Validate if password do not match
  if (password !== confirmPassword) {
    return res.status(400).send({ error: "Passwords do not match!" });
  }

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await prisma.user.create({
    data: {
      id,
      name,
      email,
      password: hashPassword,
    },
  });

  return res.status(201).send({ newUser });
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).send({ error: "Email can't be empty" });
  }

  if (!password) {
    return res.status(400).send({ error: "Password can't be empty" });
  }

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return res.status(400).send({ error: "User not found!" });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(422).send({ error: "Invalid password!" });
  }

  // Create token
  const secret = process.env.SECRET;

  const token = jwt.sign(
    {
      id: user.id,
    },
    secret as string
  );

  return res.status(200).send({ id: user.id, token });
}
