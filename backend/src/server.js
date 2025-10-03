const app = require('./app');
const { createTable } = require('./utils/db');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await createTable();
});