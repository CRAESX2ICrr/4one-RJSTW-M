"use client"

import { useParams } from "next/navigation"
import { ShoppingCart, Heart } from "lucide-react"
import { useProductPage } from "@/hooks/product/useProductPage"

export default function ProductPage() {
  const { slug } = useParams()

  const {
    product,
    itemImage,
    loading,
    selectedColor,
    setSelectedColor,
    selectedStorage,
    setSelectedStorage,
    finalPrice
  } = useProductPage(slug)

  if (loading) {
    return (
      <div className="text-white px-10 py-28 text-center opacity-60">
        Loading product…
      </div>
    )
  }

  if (!product) {
    return (
      <div className="text-white px-10 py-28 text-center">
        Product not found
      </div>
    )
  }

  return (
    <main className="text-white px-10 py-28">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="rounded-3xl bg-black/70 backdrop-blur-xl p-10 flex items-center justify-center">
          {itemImage ? (
            <img
              src={itemImage}
              alt={product.model}
              className="h-[440px] object-contain"
            />
          ) : (
            <div className="opacity-40 text-sm">
              Image unavailable
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="rounded-3xl bg-black/70 backdrop-blur-xl p-10 space-y-8">

          {/* TITLE */}
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wide opacity-60">
              {product.brand}
            </p>
            <h1 className="text-3xl font-semibold">{product.model}</h1>
            <p className="opacity-70 max-w-lg">
              {product.description}
            </p>
          </div>

          {/* SPECS */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Specifications</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {Object.entries(product.specs).map(([key, value]) => (
                <p key={key}>
                  <span className="opacity-50 capitalize">{key}:</span>{" "}
                  {value}
                </p>
              ))}
            </div>
          </div>

          {/* OPTIONS */}
          <div className="space-y-6">

            {/* COLOR */}
            <div>
              <p className="text-sm mb-2 opacity-60">Color</p>
              <div className="flex gap-2 flex-wrap">
                {product.options.color.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedColor?.name === color.name
                        ? "bg-white text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* STORAGE */}
            <div>
              <p className="text-sm mb-2 opacity-60">Storage</p>
              <div className="flex gap-2 flex-wrap">
                {product.options.storage.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedStorage(size)}
                    className={`px-5 py-2 rounded-xl text-sm ${
                      selectedStorage === size
                        ? "bg-white text-black"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <p className="text-2xl font-semibold">
              ${finalPrice.toLocaleString()} {product.pricing.currency}
            </p>

            <button
              disabled
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white text-black opacity-40 cursor-not-allowed"
            >
              <ShoppingCart size={20} />
              Add to cart
            </button>

            <button
              disabled
              className="w-20 h-14 flex items-center justify-center rounded-2xl bg-white/10 opacity-40 cursor-not-allowed"
            >
              <Heart size={20} />
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}
