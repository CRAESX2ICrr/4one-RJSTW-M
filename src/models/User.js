import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true, // ✅ now required
      trim: true,
    },

    // 🔮 Future expansion (safe to add later)
    /*
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    shipping: {
      method: String,
      notes: String,
    },
    */
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
