import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema(
	{
		category: String,
		brand: String,
		brandSlug: String,
		brandImage: String,
		series: String,
		items: [
			{
				name: String,
				slug: String,
				image: String
			}
		]
	},
	{ timestamps: true }
)

// Prevent model overwrite in dev (VERY important)
export default mongoose.models.Item ||
	mongoose.model("Item", ItemSchema)
