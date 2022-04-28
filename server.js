const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get('/tasks', (request, response) => {
  return response.json([
    {
      id: 1,
      title: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet.'
    }
  ]);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
