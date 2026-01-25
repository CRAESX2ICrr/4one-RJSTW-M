import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import { cookies } from "next/headers"

export async function PATCH(req) {
	await connectDB()

	const { displayName } = await req.json()

	if (!displayName || displayName.length < 2) {
		return NextResponse.json(
			{ error: "Invalid display name" },
			{ status: 400 }
		)
	}

	const userId = cookies().get("userId")?.value

	if (!userId) {
		return NextResponse.json(
			{ error: "Unauthorized" },
			{ status: 401 }
		)
	}

	const user = await User.findByIdAndUpdate(
		userId,
		{ displayName },
		{ new: true }
	)

	if (!user) {
		return NextResponse.json(
			{ error: "User not found" },
			{ status: 404 }
		)
	}

	return NextResponse.json({
		id: user._id,
		email: user.email,
		displayName: user.displayName
	})
}
