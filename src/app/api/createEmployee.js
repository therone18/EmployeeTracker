// pages/api/createEmployee.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, position, status } = req.body;

  try {
    const createdEmployee = await prisma.employee.create({
      data: {
        name,
        position,
        status,
      },
    });

    res.status(201).json(createdEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Error creating employee' });
  }
}
