import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config();
const PORT = process.env.PORT || 8000;

// DB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running at port http://localhost:5001/api/v1 🍵`);
});
