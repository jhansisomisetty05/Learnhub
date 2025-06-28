import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  type: String, // 'student', 'teacher', 'admin'
});

export default mongoose.model("User", userSchema);
