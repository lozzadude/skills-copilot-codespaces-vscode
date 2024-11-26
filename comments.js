//create web server
const express = require('express');
const app = express();
const PORT = 3000;

//create a comment
app.post('/comment', (req, res) => {
  const comment = req.body.comment;
  res.send(`Your comment: ${comment}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(express.json());