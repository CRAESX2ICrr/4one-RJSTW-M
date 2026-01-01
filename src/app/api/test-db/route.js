import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return new Response("MongoDB connected successfully");
  } catch (error) {
    console.error("MONGO CONNECTION ERROR:", error);

    return new Response(
      JSON.stringify({
        name: error.name,
        message: error.message,
      }),
      { status: 500 }
    );
  }
}
