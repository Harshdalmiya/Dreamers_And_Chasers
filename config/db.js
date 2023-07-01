const mongoose=require("mongoose");

const connectionDb =async() => {
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("DB connection successful");
    }
    catch{
      console.log("Error connecting DataBase");
}
};
module.exports=connectionDb;