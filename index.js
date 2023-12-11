// index.js

const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/createEmployee', async (req, res) => {
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
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
