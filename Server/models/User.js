const mongoose = require('mongoose')

const TrailTimeSchema = new mongoose. Schema({

email: String,
password: String,
firstName: String,
lastName: String,
countryCode: Number,
phoneNumber:Number,
dob:Date,
tripType:String,
tourPreference:String
})
const TrailTimeModel = mongoose.model("users",TrailTimeSchema);
module.exports=TrailTimeModel