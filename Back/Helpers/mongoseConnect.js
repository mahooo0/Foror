const { default: mongoose } = require('mongoose');

const ConnectToMongoose = () => {
    const MONGO_URI =
        'mongodb+srv://admin:parol123@cluster0.rzagh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    mongoose
        .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((err) => console.error('MongoDB connection error:', err));
};
module.exports = { ConnectToMongoose };
