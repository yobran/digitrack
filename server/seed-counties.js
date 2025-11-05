const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seedKenyaCounties() {
  try {
    console.log('Seeding ALL 47 Kenya counties and sub-counties...');

    // ALL 47 Kenya counties with their sub-counties
    const kenyaCounties = [
      { name: 'Mombasa', code: '001', subCounties: ['Changamwe', 'Jomvu', 'Kisauni', 'Likoni', 'Mvita', 'Nyali'] },
      { name: 'Kwale', code: '002', subCounties: ['Kinango', 'Lungalunga', 'Matuga', 'Msambweni'] },
      { name: 'Kilifi', code: '003', subCounties: ['Ganze', 'Kaloleni', 'Kilifi North', 'Kilifi South', 'Magarini', 'Malindi', 'Rabai'] },
      { name: 'Tana River', code: '004', subCounties: ['Bura', 'Galole', 'Garsen'] },
      { name: 'Lamu', code: '005', subCounties: ['Lamu East', 'Lamu West'] },
      { name: 'Taita Taveta', code: '006', subCounties: ['Mwatate', 'Taveta', 'Voi', 'Wundanyi'] },
      { name: 'Garissa', code: '007', subCounties: ['Balambala', 'Dadaab', 'Fafi', 'Garissa Township', 'Hulugho', 'Ijara', 'Lagdera'] },
      { name: 'Wajir', code: '008', subCounties: ['Eldas', 'Tarbaj', 'Wajir East', 'Wajir North', 'Wajir South', 'Wajir West'] },
      { name: 'Mandera', code: '009', subCounties: ['Banissa', 'Lafey', 'Mandera East', 'Mandera North', 'Mandera South', 'Mandera West'] },
      { name: 'Marsabit', code: '010', subCounties: ['Laisamis', 'Moyale', 'North Horr', 'Saku'] },
      { name: 'Isiolo', code: '011', subCounties: ['Isiolo', 'Merti', 'Garbatulla'] },
      { name: 'Meru', code: '012', subCounties: ['Buuri', 'Igembe Central', 'Igembe North', 'Igembe South', 'Imenti Central', 'Imenti North', 'Imenti South', 'Tigania East', 'Tigania West'] },
      { name: 'Tharaka Nithi', code: '013', subCounties: ['Chuka', 'Igambangobe', 'Maara', 'Tharaka'] },
      { name: 'Embu', code: '014', subCounties: ['Manyatta', 'Mbeere North', 'Mbeere South', 'Runyenjes'] },
      { name: 'Kitui', code: '015', subCounties: ['Kitui Central', 'Kitui East', 'Kitui Rural', 'Kitui South', 'Kitui West', 'Mwingi Central', 'Mwingi North', 'Mwingi West'] },
      { name: 'Machakos', code: '016', subCounties: ['Kathiani', 'Machakos Town', 'Masinga', 'Matungulu', 'Mavoko', 'Mwala', 'Yatta'] },
      { name: 'Makueni', code: '017', subCounties: ['Kibwezi East', 'Kibwezi West', 'Kilome', 'Makueni', 'Mbooni'] },
      { name: 'Nyandarua', code: '018', subCounties: ['Kinangop', 'Kipipiri', 'Ndaragwa', 'Ol Kalou', 'Ol Jorok'] },
      { name: 'Nyeri', code: '019', subCounties: ['Kieni East', 'Kieni West', 'Mathira East', 'Mathira West', 'Mukurweini', 'Nyeri Central', 'Nyeri South', 'Tetu'] },
      { name: 'Kirinyaga', code: '020', subCounties: ['Kirinyaga Central', 'Kirinyaga East', 'Kirinyaga West', 'Mwea East', 'Mwea West'] },
      { name: "Murang'a", code: '021', subCounties: ['Gatanga', 'Kahuro', 'Kandara', 'Kangema', 'Kigumo', 'Kiharu', 'Mathioya'] },
      { name: 'Kiambu', code: '022', subCounties: ['Gatundu North', 'Gatundu South', 'Githunguri', 'Juja', 'Kabete', 'Kiambu', 'Kiambaa', 'Kikuyu', 'Limuru', 'Ruiru', 'Thika Town', 'Lari'] },
      { name: 'Turkana', code: '023', subCounties: ['Kibish', 'Loima', 'Turkana Central', 'Turkana East', 'Turkana North', 'Turkana South', 'Turkana West'] },
      { name: 'West Pokot', code: '024', subCounties: ['Kipkomo', 'Pokot Central', 'Pokot North', 'Pokot South', 'Sigor'] },
      { name: 'Samburu', code: '025', subCounties: ['Samburu East', 'Samburu North', 'Samburu West'] },
      { name: 'Trans Nzoia', code: '026', subCounties: ['Cherangany', 'Endebess', 'Kiminini', 'Kwanza', 'Saboti'] },
      { name: 'Uasin Gishu', code: '027', subCounties: ['Ainabkoi', 'Kapseret', 'Kesses', 'Moiben', 'Soy', 'Turbo'] },
      { name: 'Elgeyo Marakwet', code: '028', subCounties: ['Keiyo North', 'Keiyo South', 'Marakwet East', 'Marakwet West'] },
      { name: 'Nandi', code: '029', subCounties: ['Aldai', 'Chesumei', 'Emgwen', 'Mosop', 'Nandi Hills', 'Tinderet'] },
      { name: 'Baringo', code: '030', subCounties: ['Baringo Central', 'Baringo North', 'Baringo South', 'Eldama Ravine', 'Mogotio', 'Tiaty'] },
      { name: 'Laikipia', code: '031', subCounties: ['Laikipia Central', 'Laikipia East', 'Laikipia North', 'Laikipia West', 'Nyahururu'] },
      { name: 'Nakuru', code: '032', subCounties: ['Bahati', 'Gilgil', 'Kuresoi North', 'Kuresoi South', 'Molo', 'Naivasha', 'Nakuru Town East', 'Nakuru Town West', 'Njoro', 'Rongai', 'Subukia'] },
      { name: 'Narok', code: '033', subCounties: ['Narok East', 'Narok North', 'Narok South', 'Narok West', 'Transmara East', 'Transmara West'] },
      { name: 'Kajiado', code: '034', subCounties: ['Isinya', 'Kajiado Central', 'Kajiado East', 'Kajiado North', 'Kajiado West', 'Loitokitok', 'Mashuuru'] },
      { name: 'Kericho', code: '035', subCounties: ['Ainamoi', 'Belgut', 'Bureti', 'Kipkelion East', 'Kipkelion West', 'Soin Sigowet'] },
      { name: 'Bomet', code: '036', subCounties: ['Bomet Central', 'Bomet East', 'Chepalungu', 'Konoin', 'Sotik'] },
      { name: 'Kakamega', code: '037', subCounties: ['Butere', 'Kakamega Central', 'Kakamega East', 'Kakamega North', 'Kakamega South', 'Khwisero', 'Lugari', 'Lukuyani', 'Matungu', 'Mumias East', 'Mumias West', 'Navakholo'] },
      { name: 'Vihiga', code: '038', subCounties: ['Emuhaya', 'Hamisi', 'Luanda', 'Sabatia', 'Vihiga'] },
      { name: 'Bungoma', code: '039', subCounties: ['Bumula', 'Kabuchai', 'Kanduyi', 'Kimilili', 'Mt Elgon', 'Sirisia', 'Tongaren', 'Webuye East', 'Webuye West'] },
      { name: 'Busia', code: '040', subCounties: ['Budalangi', 'Butula', 'Funyula', 'Nambele', 'Teso North', 'Teso South'] },
      { name: 'Siaya', code: '041', subCounties: ['Alego Usonga', 'Bondo', 'Gem', 'Rarieda', 'Ugenya', 'Ugunja'] },
      { name: 'Kisumu', code: '042', subCounties: ['Kisumu Central', 'Kisumu East', 'Kisumu West', 'Muhoroni', 'Nyakach', 'Nyando', 'Seme'] },
      { name: 'Homa Bay', code: '043', subCounties: ['Homa Bay Town', 'Kabondo Kasipul', 'Karachuonyo', 'Kasipul', 'Mbita', 'Ndhiwa', 'Rangwe', 'Suba'] },
      { name: 'Migori', code: '044', subCounties: ['Awendo', 'Kuria East', 'Kuria West', 'Mabera', 'Ntimaru', 'Rongo', 'Suna East', 'Suna West', 'Uriri'] },
      { name: 'Kisii', code: '045', subCounties: ['Bobasi', 'Bomachoge Borabu', 'Bomachoge Chache', 'Bonchari', 'Etago', 'Gucha', 'Gucha South', 'Kenyenya', 'Kitutu Chache North', 'Kitutu Chache South', 'Magena', 'Marani', 'Masaba South', 'Mochenwa', 'Nyamache', 'Sameta'] },
      { name: 'Nyamira', code: '046', subCounties: ['Borabu', 'Manga', 'Masaba North', 'Nyamira North', 'Nyamira South'] },
      { name: 'Nairobi', code: '047', subCounties: ['Dagoretti North', 'Dagoretti South', 'Embakasi Central', 'Embakasi East', 'Embakasi North', 'Embakasi South', 'Embakasi West', 'Kamukunji', 'Kasarani', 'Kibra', 'Langata', 'Makadara', 'Mathare', 'Roysambu', 'Ruaraka', 'Starehe', 'Westlands'] }
    ];

    // Clear existing data first
    await prisma.subCounty.deleteMany();
    await prisma.county.deleteMany();

    console.log('Creating counties and sub-counties...');
    
    // Create counties and subcounties
    for (const countyData of kenyaCounties) {
      const county = await prisma.county.create({
        data: {
          name: countyData.name,
          code: countyData.code,
          subCounties: {
            create: countyData.subCounties.map(subCountyName => ({
              name: subCountyName,
              code: subCountyName.toLowerCase().replace(/\s+/g, '_')
            }))
          }
        }
      });
      console.log(`✅ Created ${county.name} with ${countyData.subCounties.length} sub-counties`);
    }

    console.log('🎉 ALL 47 Kenya counties and sub-counties seeded successfully!');
    console.log(`📊 Total: ${kenyaCounties.length} counties created`);
    
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedKenyaCounties();
