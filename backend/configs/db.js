const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://mohammededris139:Sc3FAH3aigjpwvjT@cluster0.wvzcqba.mongodb.net/")
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDB;