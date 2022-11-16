import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: "string",
    maxLength: 255,
  },
  price: {
    type: "number",
  },
});
export default mongoose.model("products",productSchema)
