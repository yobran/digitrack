const { PrismaClient } = require('./prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Hash the password properly
  const hashedPassword = await bcrypt.hash('password123', 10);

  // Create a test user if doesn't exist
  const user = await prisma.user.upsert({
    where: { email: 'intern@dlp.com' },
    update: {},
    create: {
      name: 'DLP Field Intern',
      email: 'intern@dlp.com',
      password: hashedPassword,
    },
  });

  console.log('✅ Test user created:', user.email);
  console.log('📧 Login with: intern@dlp.com / password123');

  // Create sample schools
  const schools = await Promise.all([
    prisma.school.upsert({
      where: { code: 'SCH001' },
      update: {},
      create: {
        name: 'Nairobi Primary School',
        code: 'SCH001',
        location: 'Nairobi Central',
        county: 'Nairobi',
        principal: 'Mr. John Kamau',
        phone: '+254712345678',
      },
    }),
    prisma.school.upsert({
      where: { code: 'SCH002' },
      update: {},
      create: {
        name: 'Mombasa Secondary School',
        code: 'SCH002',
        location: 'Mombasa Island',
        county: 'Mombasa',
        principal: 'Mrs. Amina Hassan',
        phone: '+254723456789',
      },
    }),
    prisma.school.upsert({
      where: { code: 'SCH003' },
      update: {},
      create: {
        name: 'Kisumu Academy',
        code: 'SCH003',
        location: 'Kisumu Town',
        county: 'Kisumu',
        principal: 'Mr. Peter Ochieng',
        phone: '+254734567890',
      },
    }),
  ]);

  console.log('✅ Sample schools created:', schools.map(s => s.name));

  // Assign schools to the test user
  const assignments = await Promise.all(
    schools.map(school =>
      prisma.schoolAssignment.upsert({
        where: { userId_schoolId: { userId: user.id, schoolId: school.id } },
        update: {},
        create: {
          userId: user.id,
          schoolId: school.id,
        },
      })
    )
  );

  console.log('✅ School assignments created');

  // Add some sample devices
  const devices = await Promise.all([
    prisma.device.create({
      data: {
        schoolId: schools[0].id,
        addedById: user.id,
        deviceType: 'Laptop',
        serialNumber: 'LP-NB-001',
        status: 'working',
        notes: 'Dell Latitude - Computer Lab',
      },
    }),
    prisma.device.create({
      data: {
        schoolId: schools[0].id,
        addedById: user.id,
        deviceType: 'Tablet',
        serialNumber: 'TAB-NB-001',
        status: 'broken',
        notes: 'Samsung Tablet - Screen cracked',
      },
    }),
    prisma.device.create({
      data: {
        schoolId: schools[1].id,
        addedById: user.id,
        deviceType: 'Projector',
        serialNumber: 'PROJ-MSA-001',
        status: 'working',
        notes: 'Epson Projector - Staff Room',
      },
    }),
  ]);

  console.log('✅ Sample devices created');

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });