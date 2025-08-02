const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/love', (req, res) => {
  const { name1, name2 } = req.body;
  const percent = Math.floor(Math.random() * 101);
  const message = `${name1} ❤️ ${name2} = ${percent}% compatible!`;

  // Save to local file
  const log = `${new Date().toLocaleString()} - ${message}\n`;
  fs.appendFileSync('love_results.txt', log);

  res.json({ message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 
