const mongoose = require("mongoose")

const GuarantorSchema = new mongoose.Schema({
    employeesFirstName: {type: String , required: true },
    employeeslastName: {type: String , required: true },
    job: {type: String , required: true },
    guarantorFirstName: {type: String , required: true },
    guarantorlastName: {type: String , required: true },
    email: { type: String, required: true, unique: true},
    phoneNumber: { type:String, required:true},
    ssn: { type:String, required:true},
    streetAddress: { type:String, required:true},
    city: { type:String, required:true},
    postalCode: { type:String, required:true},
    relationship: { type:String, required:true},
    frontImage: { type:String},
    backImage: { type:String},
},
{ timestamps:true}
);

module.exports = mongoose.model("Guarantor", GuarantorSchema);