import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import morgan from 'morgan';
import loggerApp from './utils/logger';
import authRouter from './routes/auth';
import messagesRouter from './routes/messages';
import chatRouter from './routes/chat';
import groupRouter from './routes/group';
import notificationRouter from './routes/notification';
const app = express();
const morganFormat = ':method :url :status :response-time ms';

// MIDDLEWARES:

// basics
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// security
app.use(
  cors({
    origin: [
      'http://localhost:5173', // Frontend URL with port
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

app.use(helmet());
app.use(mongoSanitize());

// logger
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logParts = message.split(' ');
        const logObject = {
          method: logParts[0],
          url: logParts[1],
          status: logParts[2],
          responseTime: logParts[3],
        };
        loggerApp.info(JSON.stringify(logObject));
      },
    },
  })
);

// ROUTES:
app.get('/', (_, res) => {
  res.send('Healthy!!!');
});

app.use('/chat-app/auth', authRouter);
app.use('/chat-app/messages', messagesRouter);
app.use('/chat-app/chats', chatRouter);
app.use('/chat-app/groups', groupRouter);
app.use('/chat-app/notifications', notificationRouter);

// Routes

export default app;
