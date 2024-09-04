const app = require('./app');
const PORT = process.env.PORT || 3000;
const cors = require('cors');  // Import the cors package

// Configure CORS to allow all origin
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
