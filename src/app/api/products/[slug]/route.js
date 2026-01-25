import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import Item from "@/models/Item"

export async function GET(req, { params }) {
	const { slug } = params

	await connectDB()

	// 1️⃣ Find the family document that contains this model
	const productDoc = await Product.findOne({
		"models.modelSlug": slug
	}).lean()

	if (!productDoc) {
		return NextResponse.json(
			{ message: "Product not found" },
			{ status: 404 }
		)
	}

	// 2️⃣ Extract the exact model
	const model = productDoc.models.find(
		m => m.modelSlug === slug
	)

	// 3️⃣ Find image from Item collection
	const itemDoc = await Item.findOne({
		"items.slug": slug
	}).lean()

	let image = null
	if (itemDoc) {
		const item = itemDoc.items.find(i => i.slug === slug)
		image = item?.image || null
	}

	// 4️⃣ Return exactly what the UI expects
	return NextResponse.json({
		brand: productDoc.brand,
		family: productDoc.family,
		model: model.model,
		modelSlug: model.modelSlug,
		description: model.description,
		specs: model.specs,
		options: model.options,
		pricing: model.pricing,
		image
	})
}
