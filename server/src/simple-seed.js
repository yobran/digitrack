const { PrismaClient } = require('./prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function simpleSeed() {
  try {
    console.log('🌱 Starting simple seed...');
    
    // Create user if doesn't exist
    let user = await prisma.user.findFirst();
    if (!user) {
      const hashedPassword = await bcrypt.hash('password123', 10);
      user = await prisma.user.create({
        data: {
          name: 'Test Intern',
          email: 'test@dlp.com',
          password: hashedPassword,
        },
      });
      console.log('✅ Created user:', user.email);
    } else {
      console.log('✅ Using existing user:', user.email);
    }
    
    // Create school if doesn't exist
    let school = await prisma.school.findFirst();
    if (!school) {
      school = await prisma.school.create({
        data: {
          name: 'Nairobi Primary School',
          code: 'SCH001',
          location: 'Nairobi Central',
          county: 'Nairobi',
          principal: 'Mr. John Kamau',
        },
      });
      console.log('✅ Created school:', school.name);
    } else {
      console.log('✅ Using existing school:', school.name);
    }
    
    // Assign school to user
    const assignment = await prisma.schoolAssignment.upsert({
      where: {
        userId_schoolId: {
          userId: user.id,
          schoolId: school.id,
        },
      },
      update: {},
      create: {
        userId: user.id,
        schoolId: school.id,
      },
    });
    console.log('✅ School assigned to user');
    
    // Add a device
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
    console.log('✅ Added device:', device.deviceType);
    
    console.log('🎉 Simple seed completed!');
    
  } catch (error) {
    console.error('❌ Seed error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

simpleSeed();