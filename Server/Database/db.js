import mongoose from "mongoose";
export const Connection = async(MONGODB_URI)=>
{
  /* const URL =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.b4twe23.mongodb.net/?retryWrites=true&w=majority`
   */  try {
        await mongoose.connect(MONGODB_URI,{useUnifiedTopology: true,useNewUrlParser: true});
        console.log('database connect sucessfully');

    } catch (error) {
        console.log('error found during connection with database',error.message);
                   
    }




}
export default Connection;