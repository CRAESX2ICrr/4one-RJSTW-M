import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Item from "@/models/Item"

export async function GET(request) {
	const { searchParams } = new URL(request.url)
	const category = searchParams.get("category")

	await connectDB()

	const query = category ? { category } : {}
	const items = await Item.find(query).lean()

	return NextResponse.json(items)
}
