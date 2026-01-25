"use client"

import { useState, useEffect } from "react"
import Filters from "@/components/Filters"
import FCard from "@/components/FCard"
import {
	Smartphone,
	Tablet,
	Watch,
	Headphones,
	Package
} from "lucide-react"

const categoryIcons = {
	Phones: Smartphone,
	Tablets: Tablet,
	Wearables: Watch,
	Audio: Headphones,
	Accessories: Package
}

export default function CataloguePage() {
	const [selectedCategory, setSelectedCategory] = useState("Phones")
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(false)

	const categories = [
		{ name: "Phones" },
		{ name: "Tablets" },
		{ name: "Wearables" },
		{ name: "Audio" },
		{ name: "Accessories" }
	]

	// 🔹 Fetch items whenever category changes
	useEffect(() => {
		async function fetchItems() {
			setLoading(true)
			try {
				const res = await fetch(
					`/api/items?category=${selectedCategory.toLowerCase()}`
				)
				const data = await res.json()
				setItems(data)
			} catch (error) {
				console.error("Failed to fetch items", error)
				setItems([])
			} finally {
				setLoading(false)
			}
		}

		fetchItems()
	}, [selectedCategory])

	return (
		<main className="mt-8 p-4 ms-8 me-8">
			{/* Title */}
			<div className="mt-12">
				<h1 className="text-2xl font-semibold tracking-wide">
					SHOP BY CATEGORY
				</h1>
			</div>

			{/* Category selector */}
			<div className="w-full h-32 mt-8 rounded-lg flex items-center justify-center gap-6">
				{categories.map((category) => {
					const isActive = selectedCategory === category.name
					const Icon = categoryIcons[category.name]

					return (
						<div
							key={category.name}
							onClick={() => setSelectedCategory(category.name)}
							className={[
								"w-48 h-full rounded-xl flex flex-col items-center justify-center",
								"cursor-pointer transition-all duration-300 backdrop-blur-sm",
								isActive
									? "bg-white/15 ring-2 ring-red-500 shadow-[0_0_18px_rgba(239,68,68,0.25)] scale-[1.02]"
									: "bg-white/5 hover:bg-white/10"
							].join(" ")}
						>
							<div className="w-16 h-16 rounded-full bg-white/10 mb-3 flex items-center justify-center">
								{Icon && <Icon size={28} strokeWidth={1.5} />}
							</div>

							<p className="text-sm font-semibold tracking-wide opacity-90">
								{category.name}
							</p>
						</div>
					)
				})}
			</div>

			{/* Filters */}
			<Filters />

			{/* Product cards */}
			<FCard items={items} loading={loading} />
		</main>
	)
}
