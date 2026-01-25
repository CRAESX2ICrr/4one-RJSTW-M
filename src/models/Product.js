import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
	{
		category: String, // phones
		brand: String,
		brandSlug: String,

		family: String,
		familySlug: String,

		model: String,
		modelSlug: String,

		description: String,

		image: String,

		specs: {
			chip: String,
			display: String,
			camera: String,
			battery: String,
			ram: String,
			os: String
		},

		options: {
			color: [
				{
					name: String,
					priceDelta: { type: Number, default: 0 }
				}
			],
			storage: [String]
		},

		pricing: {
			currency: { type: String, default: "USD" },
			byStorage: {
				type: Map,
				of: Number
			}
		}
	},
	{ timestamps: true }
)

export default mongoose.models.Product ||
	mongoose.model("Product", ProductSchema)
