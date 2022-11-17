import mongoose from "mongoose";
import bcrypt from "bcrypt"
const AuthSchema = mongoose.Schema({
  username: {
    type: String,
    minLenght:6,
    maxLength:255,
    required:true
  },
  password:{
    type: String,
    minLength:6,
    required:true,
  }
});
AuthSchema.methods.comparePassword =function(password){
 return bcrypt.compareSync(password,this.password)
}
export default mongoose.model("auth",AuthSchema)
