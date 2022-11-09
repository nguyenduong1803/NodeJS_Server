import express from "express";
import productRoute from "./route/product.route";
import morgan from "morgan";
import mongoose from "mongoose";
// nhúng
const app = express();
mongoose
  .connect("mongodb://localhost:27017/we17201")
  .then(() => console.log("ket nối thành công"))
  .catch(() => console.log("kết nối thất bại"));

app.use(express.json());
morgan("tiny");
app.use("/api", productRoute);

app.listen(8080, () => {
  console.log("server start");
});
