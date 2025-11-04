const { PrismaClient } = require('./prisma/client');
const prisma = new PrismaClient();

async function checkSchools() {
  try {
    console.log('🔍 Checking database contents...');
    
    // Check users
    const users = await prisma.user.findMany();
    console.log('👥 Users:', users);
    
    // Check schools
    const schools = await prisma.school.findMany();
    console.log('🏫 Schools:', schools);
    
    // Check school assignments
    const assignments = await prisma.schoolAssignment.findMany({
      include: { user: true, school: true }
    });
    console.log('📋 Assignments:', assignments);
    
    // Check devices
    const devices = await prisma.device.findMany();
    console.log('💻 Devices:', devices);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkSchools();