import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const type1 = await prisma.insuranceType.upsert({
    where: { name: 'Car Insurance' },
    update: {},
    create: {
      name: 'Car Insurance',
      description: 'Insurance for your car',
    },
  });

  const type2 = await prisma.insuranceType.upsert({
    where: { name: 'Home Insurance' },
    update: {},
    create: {
      name: 'Home Insurance',
      description: 'Insurance for your home',
    },
  });

  const user1 = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {},
    create: {
      email: 'test@test.com',
      password: 'pass1234',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit();
  });
