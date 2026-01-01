import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    const cookieStore = await cookies(); // 👈 REQUIRED
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return new Response(null, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await connectDB();
    const user = await User.findById(decoded.userId).select("-password");

    return Response.json(user);
  } catch (err) {
    console.error("AUTH /me ERROR:", err);
    return new Response(null, { status: 401 });
  }
}
