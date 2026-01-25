"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ShoppingCart, Heart } from "lucide-react"

export default function ProductPage() {
	const { slug } = useParams()

const [product, setProduct] = useState(null)
const [selectedStorage, setSelectedStorage] = useState(null)
const [selectedColor, setSelectedColor] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  if (!slug) return

  const fetchProduct = async () => {
    setLoading(true)
    setError(null)
    try {
      console.log("fetching product for slug:", slug)
      const res = await fetch(`/api/products/${encodeURIComponent(slug)}`)
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`${res.status} ${res.statusText} - ${text}`)
      }
      const data = await res.json()
      setProduct(data)
      setSelectedStorage(data.options.storage?.[0] ?? null)
      setSelectedColor(data.options.color?.[0] ?? null)
    } catch (err) {
      console.error("product fetch failed:", err)
      setError(err.message || "Failed to load product")
    } finally {
      setLoading(false)
    }
  }

  fetchProduct()
}, [slug])

if (loading) return <main className="text-white px-10 py-28">Loading...</main>
if (error) return <main className="text-white px-10 py-28">Error: {error}</main>
if (!product) return <main className="text-white px-10 py-28">Product not found.</main>

	const basePrice =
		product.pricing.byStorage[selectedStorage]

	const finalPrice =
		basePrice + (selectedColor?.priceDelta || 0)

	return (
		<main className="text-white px-10 py-28">
			<div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">

				{/* LEFT CARD — IMAGE */}
				<div className="rounded-3xl bg-black/70 backdrop-blur-xl p-10 flex items-center justify-center">
					<img
						src={product.image}
						alt={product.model}
						className="h-[440px] object-contain"
					/>
				</div>

				{/* RIGHT CARD — DETAILS */}
				<div className="rounded-3xl bg-black/70 backdrop-blur-xl p-10 space-y-8">

					{/* TITLE */}
					<div className="space-y-2">
						<p className="text-sm uppercase tracking-wide opacity-60">
							{product.brand} · {product.family}
						</p>

						<h1 className="text-3xl font-semibold">
							{product.model}
						</h1>

						<p className="opacity-70 max-w-lg">
							{product.description}
						</p>
					</div>

					{/* SPECS */}
					<div>
						<h2 className="text-lg font-semibold mb-3">
							Specifications
						</h2>

						<div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
							<p><span className="opacity-50">Chip:</span> {product.specs.chip}</p>
							<p><span className="opacity-50">Display:</span> {product.specs.display}</p>
							<p><span className="opacity-50">Camera:</span> {product.specs.camera}</p>
							<p><span className="opacity-50">Battery:</span> {product.specs.battery}</p>
							<p><span className="opacity-50">RAM:</span> {product.specs.ram}</p>
							<p><span className="opacity-50">OS:</span> {product.specs.os}</p>
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
										className={`px-4 py-2 rounded-full text-sm
											${selectedColor?.name === color.name
												? "bg-white text-black"
												: "bg-white/10 hover:bg-white/20"}`}
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
										className={`px-5 py-2 rounded-xl text-sm
											${selectedStorage === size
												? "bg-white text-black"
												: "bg-white/10 hover:bg-white/20"}`}
									>
										{size}
									</button>
								))}
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-6 flex items-center justify-center gap-6">

						<p className="text-2xl font-semibold whitespace-nowrap">
							${finalPrice.toLocaleString()}
						</p>

						<button
							disabled
							className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl
								bg-white text-black text-base font-medium
								opacity-40 cursor-not-allowed"
						>
							<ShoppingCart size={20} />
							Add to cart
						</button>

						<button
							disabled
							className="w-20 h-14 flex items-center justify-center rounded-2xl
								bg-white/10 hover:bg-white/20
								opacity-40 cursor-not-allowed"
						>
							<Heart size={20} />
						</button>

					</div>

				</div>

			</div>
		</main>
	)
}
