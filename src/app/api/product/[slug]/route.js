import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"

export async function GET(req, context) {
  const { slug } = await context.params  // ✅ FIX

  try {
    await connectDB()

    const product = await Product.findOne({
      modelSlug: slug
    }).lean()

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("PRODUCT API ERROR:", error)
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}
