const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

