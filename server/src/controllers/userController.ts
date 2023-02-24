import { Request, Response } from "express";
import { prisma } from "./../lib/prisma";

import { PatientType } from "./../@types/PatientType";

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;

  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });

  res.send({ user });
}

export async function createPatient(req: Request, res: Response) {
  const patientObj: PatientType = req.body;

  // Validations
  if (!patientObj) {
    return res.status(400).send({ error: "Body cannot be empty!" });
  }

  if (!patientObj.id) {
    return res.status(400).send({ error: "ID cannot be empty!" });
  }

  if (!patientObj.name) {
    return res.status(400).send({ error: "Name cannot be empty!" });
  }

  if (!patientObj.weight) {
    return res.status(400).send({ error: "Weight cannot be empty!" });
  }

  if (!patientObj.height) {
    return res.status(400).send({ error: "Height cannot be empty!" });
  }

  if (!patientObj.status_description) {
    return res
      .status(400)
      .send({ error: "Status description cannot be empty!" });
  }

  if (!patientObj.blood_type) {
    return res.status(400).send({ error: "Blood type cannot be empty!" });
  }

  if (!patientObj.doctor) {
    return res.status(400).send({ error: "Doctor type cannot be empty!" });
  }

  // Validate if patient already exists
  const patientAlreadyExists = await prisma.patient.findFirst({
    where: {
      id: patientObj.id,
    },
  });

  if (patientAlreadyExists) {
    return res.status(400).send({ error: "Patient already exists!" });
  }

  // Create patient
  const patient = await prisma.patient.create({
    data: patientObj as any,
  });

  return res.send({ patient });
}

export async function getPatients(req: Request, res: Response) {
  const patients = await prisma.patient.findMany();

  return res.send({ patients });
}
