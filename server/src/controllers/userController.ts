import { Request, Response } from "express";
import { prisma } from "./../lib/prisma";

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  res.send({ user });
}
