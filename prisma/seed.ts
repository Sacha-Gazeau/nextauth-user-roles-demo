import { PrismaClient } from "../src/app/_generated/prisma";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.deleteMany();
  const usersCount = await prisma.user.createMany({
    data: [
      {
        name: "Jane Doe",
        email: "jane.doe@arteveldehs.be",
        role: "ADMIN",
        // password as text: adminpassword
        hashedPassword:
          "$2a$12$OyEF6OCaIAcdMZ1MKEHNa.PAG8vwSjWEBb1fap3rcYTOCT974Sc2e",
      },
      {
        name: "John Doe",
        email: "john.doe@arteveldehs.be",
        role: "USER",
        // password as text: userpassword
        hashedPassword:
          "$2a$12$FQ137Q23XgsuxbQaBjHibe6l41c6VYH.5Fz2/Z8HeoG5AsvV48f8e",
      },
    ],
  });
  console.log(usersCount);
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
