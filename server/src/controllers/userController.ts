import express from "express";
import { prisma } from "./../lib/prisma";

export async function getUserById(req: express.Request, res: express.Response) {
  const { id } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  res.send({ user });
}
