
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

exports.database = async () => {
  try {
    const DATABASE =process.env.DB_TEST
     
    await mongoose.connect(DATABASE, {
    
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the  database.');
  } catch (error) {
    console.log('Could not connect to the database.', error);
  }
};

