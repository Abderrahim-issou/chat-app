import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';
import http from 'http';
import { initSocket, setSocketInstance } from './socket/socket';

dotenv.config();
const PORT = process.env.PORT || 8000;

// DB
connectDB();

//set up server
const server = http.createServer(app);
//initiate the socket and attach it ot the http server 
setSocketInstance(initSocket(server));

// start server ;
server.listen(PORT, () => {
  console.log(`Server running at port http://localhost:${PORT}/chat 🍵`);
});
