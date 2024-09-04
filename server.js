const app = require('./app');
const PORT = process.env.PORT || 3000;
const cors = require('cors');  // Import the cors package

// Configure CORS to allow requests from localhost:3000
app.use(cors({
  origin: '*',  // Allow this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed methods
  credentials: true,  // Allow cookies
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
