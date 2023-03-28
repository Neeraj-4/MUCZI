import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    playlist:[{
        id:{
            type:String,
            required:true,
            unique:true
        },
        url:{
            type:String,
            required:true,
            unique:true
        },
        file:String,
        title:String,
        duration: String,
        artist:String
    }]
   
  
});
const Category = mongoose.models.category || mongoose.model('category', categorySchema);

export default Category;