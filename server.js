const app = require('./app');
const PORT = process.env.PORT || 3000;
const cors = require('cors');  // Import the cors package


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
