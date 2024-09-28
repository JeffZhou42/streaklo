const mongoose = require("mongoose")

let MONGO_URI = 'mongodb://localhost:27017/test'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected : ${conn.connection.host}`)
    
    return conn
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB