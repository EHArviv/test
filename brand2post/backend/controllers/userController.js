exports.registerUser = (req, res) => {
  const { name, email, socialMedia } = req.body;
  // Basic validation & placeholder logic
  if (!name || !email) return res.status(400).json({ msg: 'Missing fields' });
  res.status(201).json({ msg: 'User registered', user: { name, email, socialMedia } });
};
