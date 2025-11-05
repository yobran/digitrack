const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all counties with their subcounties
router.get('/counties', async (req, res) => {
  try {
    const counties = await prisma.county.findMany({
      include: {
        subCounties: {
          select: {
            id: true,
            name: true,
            code: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });
    
    res.json(counties);
  } catch (error) {
    console.error('Counties fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch counties' });
  }
});

// Get subcounties by county ID
router.get('/counties/:countyId/subcounties', async (req, res) => {
  try {
    const { countyId } = req.params;
    
    const subCounties = await prisma.subCounty.findMany({
      where: {
        countyId: countyId
      },
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: {
        name: 'asc'
      }
    });
    
    res.json(subCounties);
  } catch (error) {
    console.error('SubCounties fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch subcounties' });
  }
});

module.exports = router;
