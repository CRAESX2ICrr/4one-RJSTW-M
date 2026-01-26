import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },

    brand: {
      type: String,
      required: true
    },

    brandSlug: {
      type: String,
      required: true,
      index: true
    },

    model: {
      type: String,
      required: true
    },

    modelSlug: {
      type: String,
      required: true,
      unique: true,
      index: true
    },

    description: {
      type: String,
      required: true
    },

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
          name: {
            type: String,
            required: true
          },
          priceDelta: {
            type: Number,
            default: 0
          }
        }
      ],

      storage: {
        type: [String],
        required: true
      }
    },

    pricing: {
      currency: {
        type: String,
        enum: ["USD"],
        default: "USD"
      },

      byStorage: {
        type: Map,
        of: Number,
        required: true
      }
    }
  },
  {
    timestamps: true,
    collection: "details"
  }
)

// Prevent model overwrite in dev / hot reload
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema)
