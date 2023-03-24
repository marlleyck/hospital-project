import { Request, Response } from "express";
import { prisma } from "./../lib/prisma";

import { PatientType } from "./../@types/PatientType";

export async function getUserById(req: Request, res: Response) {
  const tokenDecoded = req.tokenDecoded;

  const user = await prisma.user.findFirst({
    where: {
      id: tokenDecoded.id,
    },
  });

  res.send(user);
}

export async function createPatient(req: Request, res: Response) {
  const {
    id,
    name,
    weight,
    height,
    imc,
    status_description,
    blood_type,
    doctor,
    userId,
  } = req.body;

  // Validations

  if (!id) {
    return res.status(400).send({ error: "ID cannot be empty!" });
  }

  if (!name) {
    return res.status(400).send({ error: "Name cannot be empty!" });
  }

  if (!weight) {
    return res.status(400).send({ error: "Weight cannot be empty!" });
  }

  if (!height) {
    return res.status(400).send({ error: "Height cannot be empty!" });
  }

  if (!status_description) {
    return res
      .status(400)
      .send({ error: "Status description cannot be empty!" });
  }

  if (!blood_type) {
    return res.status(400).send({ error: "Blood type cannot be empty!" });
  }

  if (!doctor) {
    return res.status(400).send({ error: "Doctor type cannot be empty!" });
  }

  // Validate if patient already exists
  const patientAlreadyExists = await prisma.patient.findFirst({
    where: {
      id: id,
    },
  });

  if (patientAlreadyExists) {
    return res.status(400).send({ error: "Patient already exists!" });
  }

  // Create patient
  const patient = await prisma.patient.create({
    data: {
      id,
      name,
      weight,
      height,
      imc,
      status_description,
      blood_type,
      doctor,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return res.send({ patient });
}

export async function getPatients(req: Request, res: Response) {
  const patients = await prisma.patient.findMany();

  return res.send({ patients });
}
