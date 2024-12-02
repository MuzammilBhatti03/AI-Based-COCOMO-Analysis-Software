const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const aiRoutes = require('./routes/aiRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Connection error:', error));

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/ai', aiRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
