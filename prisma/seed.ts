import { PrismaClient } from "../src/app/_generated/prisma";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.deleteMany();
  await prisma.user.create({
    data: {
      email: "karel.desmet@arteveldehs.be",
      name: "Karel De Smet",
      hashedPassword:"test",
      role: "ADMIN"
    },
  });
  await prisma.user.create({
    data: {
      email: "john.doe@something.com",
      name: "John Doe",
      hashedPassword:"test",
      role: "STANDARD"
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
