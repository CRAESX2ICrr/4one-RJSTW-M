export async function GET() {
	return Response.json([
		{ name: "Phones" },
		{ name: "Tablets" },
		{ name: "Wearables" },
		{ name: "Audio" },
		{ name: "Accessories" }
	])
}
