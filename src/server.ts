// // src/server.ts
// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import uploadRoutes from './routes/uploadRoutes.js';
// import path from 'path';

// dotenv.config();

// const app = express();

// // Connect to database
// connectDB();

// // Middleware
// app.use(express.json());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api', uploadRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

console.log("Hello TS")