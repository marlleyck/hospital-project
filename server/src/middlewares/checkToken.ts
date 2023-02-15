import jwt from "jsonwebtoken";
import express from "express";

export async function checkToken(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ error: "Access denied!" });
  }

  // Verify if token is valid

  try {
    const secret = process.env.SECRET as string;
    const responseToken = jwt.verify(token, secret);
    req.tokenDecoded = responseToken;

    next();
  } catch (e) {
    console.log(e);
    return res.status(400).send({ error: "Invalid token!" });
  }
}
