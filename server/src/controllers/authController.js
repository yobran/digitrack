const { PrismaClient } = require('../prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: 'All fields are required' });

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    console.error('Registration Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
