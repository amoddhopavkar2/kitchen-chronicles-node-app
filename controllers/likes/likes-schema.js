import mongoose from "mongoose";

const likesSchema = mongoose.Schema(
  {
    idMeal: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  },
  { collection: "likes" }
);

export default likesSchema;
