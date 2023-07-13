const mongoose = require('mongoose')

const connectDB = async() => {
    const connect = await mongoose.connect(process.env.MONGODB_URL)

    console.log('MongoDB Connected!!')
}

module.exports = connectDB