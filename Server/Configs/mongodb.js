import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('Database Connected');
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/BG-REMOVAL`, {
            
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); 
    }
};

export default connectDB;
