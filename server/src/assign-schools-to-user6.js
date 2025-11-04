const { PrismaClient } = require('./prisma/client');
const prisma = new PrismaClient();

async function assignSchoolsToUser6() {
  try {
    console.log('🎯 Assigning schools to User ID 6...');
    
    // Get user 6
    const user = await prisma.user.findUnique({
      where: { id: 6 }
    });
    
    if (!user) {
      console.log('❌ User ID 6 not found');
      return;
    }
    
    console.log('👤 Found user:', user.email);
    
    // Get or create schools
    let school1 = await prisma.school.findUnique({
      where: { code: 'SCH001' }
    });
    
    if (!school1) {
      school1 = await prisma.school.create({
        data: {
          name: 'Nairobi Primary School',
          code: 'SCH001',
          location: 'Nairobi Central',
          county: 'Nairobi',
          principal: 'Mr. John Kamau',
        },
      });
      console.log('✅ Created school:', school1.name);
    } else {
      console.log('✅ Found existing school:', school1.name);
    }
    
    // Assign school to user 6
    await prisma.schoolAssignment.upsert({
      where: {
        userId_schoolId: {
          userId: 6,
          schoolId: school1.id,
        },
      },
      update: {},
      create: {
        userId: 6,
        schoolId: school1.id,
      },
    });
    
    console.log('✅ School assigned to User 6');
    
    // Add a device
    await prisma.device.create({
      data: {
        schoolId: school1.id,
        addedById: 6,
        deviceType: 'Laptop',
        serialNumber: 'LP-NB-001',
        status: 'working',
        notes: 'Dell Latitude - Computer Lab',
      },
    });
    
    console.log('✅ Device added to school');
    
    console.log('🎉 User 6 now has schools and devices!');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

assignSchoolsToUser6();