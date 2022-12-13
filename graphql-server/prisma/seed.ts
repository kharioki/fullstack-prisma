import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete all 'User' and 'Message' records
  await prisma.message.deleteMany({})
  await prisma.user.deleteMany({})
  
  // (Re-)Create dummy 'User' and 'Message' records
  await prisma.user.create({
    data: {
      name: 'Tony Stark',
      messages: {
        create: [
          {
            body: 'The Avengers Initiative',
          },
          {
            body: 'Jarvis and the AI',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Steve Rogers',
      messages: {
        create: [
          {
            body: 'The Hydra Invasion',
          },
          {
            body: 'Captain America Shield',
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Bruce Banner',
      messages: {
        create: [
          {
            body: 'The Hulk',
          },
          {
            body: 'The Gamma Radiation',
          },
        ],
      },
    },
  });

}

main().then(() => {
  console.log('Data seeded...');
});
