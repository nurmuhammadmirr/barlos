import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
    name: { type: String,required:true },
    company: { type: String,required:true},
    phone: { type: String,required:true },

})


const infoModel = mongoose.models.info || mongoose.model('info',infoSchema)
export default infoModel