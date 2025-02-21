import mongoose from "mongoose";

const contact = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    subject:{type:String,required:true},
    message:{type:String,required:true}
})

const Contact = mongoose.models.Contact || mongoose.model('Contact',contact)
export default  Contact 