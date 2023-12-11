import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const employee1 = await prisma.employee.create({data:{name: "Test Name 3", position:"Test Position 1", status:"Test Status 1"}})
  const employee2 = await prisma.employee.create({data:{name: "Test Name 4", position:"Test Position 2", status:"Test Status 2"}})
  const employee3 = await prisma.employee.create({data:{name: "Test Name 5", position:"Test Position 4", status:"Test Status 3"}})
  const employeeMany = await prisma.employee.findMany()
  console.log(employeeMany)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })