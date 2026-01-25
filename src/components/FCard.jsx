"use client"

import Link from "next/link"

export default function FCard({ items = [], loading }) {
	// Flatten brand documents → individual products
	const products = items.flatMap((brand) =>
		brand.items.map((item) => ({
			...item,
			brand: brand.brand
		}))
	)

	if (loading) {
		return (
			<div className="mt-12 rounded-2xl bg-black/60 p-6 text-center opacity-70">
				Loading products…
			</div>
		)
	}

	if (!products.length) {
		return (
			<div className="mt-12 rounded-2xl bg-black/60 p-6 text-center opacity-70">
				No products found
			</div>
		)
	}

	return (
		<div className="mt-12 rounded-2xl bg-black/60 p-6">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{products.map((product) => (
					<Link
						key={product.slug}
						href={`/product/${product.slug}`}
						className="group block"
					>
						<div
							className={[
								"cursor-pointer rounded-xl",
								"bg-white/8 hover:bg-white/12",
								"backdrop-blur-md transition-all p-4",
								"hover:-translate-y-1"
							].join(" ")}
						>
							{/* Image */}
							<div className="w-full h-44 flex items-center justify-center mb-4">
								<img
									src={product.image}
									alt={product.name}
									className="h-full object-contain group-hover:scale-105 transition"
								/>
							</div>

							{/* Text */}
							<div className="text-center space-y-1">
								<p className="text-sm opacity-70">
									{product.brand}
								</p>
								<p className="text-lg font-semibold">
									{product.name}
								</p>
							</div>

							{/* Placeholder */}
							<div className="mt-3 text-xs opacity-50 text-center">
								Multiple colors & storage
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
