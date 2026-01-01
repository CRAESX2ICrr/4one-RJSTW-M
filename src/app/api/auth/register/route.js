import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, displayName } = await req.json();

    // ✅ enforce all required
    if (!email || !password || !displayName) {
      return new Response("All fields are required", { status: 400 });
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
      displayName,
    });

    return new Response("User created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Server error", { status: 500 });
  }
}
