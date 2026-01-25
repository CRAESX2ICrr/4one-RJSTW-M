"use client"

import { useState } from "react"
import {
	Search,
	ArrowDownWideNarrow,
	ArrowUpNarrowWide
} from "lucide-react"

export default function Filters() {
	const [sortDirection, setSortDirection] = useState("desc")

	const toggleSortDirection = () => {
		setSortDirection(prev => (prev === "desc" ? "asc" : "desc"))
	}

	return (
		<div className="mx-auto mt-10 w-[42rem] h-14 bg-black/80 backdrop-blur-md rounded-full flex items-center gap-3 px-4">

			{/* Search */}
			<div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 flex-1">
				<Search size={16} className="opacity-70" />
				<input
					type="text"
					placeholder="Search products"
					className="bg-transparent outline-none text-sm placeholder:opacity-60 w-full"
				/>
			</div>

			{/* Sort dropdown */}
			<select className="bg-white/10 text-sm rounded-full px-4 py-2 outline-none cursor-pointer text-white appearance-none">
				<option className="bg-black text-white" value="featured">Featured</option>
				<option className="bg-black text-white" value="newest">Newest</option>
				<option className="bg-black text-white" value="price">Price</option>
				<option className="bg-black text-white" value="alpha">Alphabetical</option>
			</select>

			{/* Sort direction toggle */}
			<button
				onClick={toggleSortDirection}
				className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
				aria-label="Toggle sort direction"
			>
				{sortDirection === "desc"
					? <ArrowDownWideNarrow size={16} />
					: <ArrowUpNarrowWide size={16} />
				}
			</button>

		</div>
	)
}
