const { PrismaClient } = require('./prisma/client');
const prisma = new PrismaClient();

async function addSampleSchool() {
  try {
    // Get the first user (you)
    const user = await prisma.user.findFirst();
    
    if (!user) {
      console.log('❌ No users found. Please register first.');
      return;
    }

    console.log('👤 Using user:', user.email);

    // Create a sample school
    const school = await prisma.school.create({
      data: {
        name: 'Nairobi Primary School',
        code: 'SCH001',
        location: 'Nairobi Central',
        county: 'Nairobi',
        principal: 'Mr. John Kamau',
        phone: '+254712345678',
      },
    });

    console.log('✅ School created:', school.name);

    // Assign school to user
    const assignment = await prisma.schoolAssignment.create({
      data: {
        userId: user.id,
        schoolId: school.id,
      },
    });

    console.log('✅ School assigned to user');

    // Add a sample device
    const device = await prisma.device.create({
      data: {
        schoolId: school.id,
        addedById: user.id,
        deviceType: 'Laptop',
        serialNumber: 'LP-NB-001',
        status: 'working',
        notes: 'Dell Latitude - Computer Lab',
      },
    });

    console.log('✅ Device added:', device.deviceType);

    console.log('🎉 Sample data added successfully!');
    console.log('🏫 School: Nairobi Primary School');
    console.log('💻 Device: Laptop (working)');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addSampleSchool();