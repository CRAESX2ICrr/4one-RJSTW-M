import { Trash2 } from "lucide-react"

export default function Account({ user }) {
	return (
		<>
			<div>
				<h2 className="text-xl font-semibold mb-6">
					Account Information
				</h2>

				<div className="space-y-6 max-w-xl">
					<div>
						<label className="text-base opacity-60">
							Display name
						</label>
						<input
							value={user.displayName}
							disabled
							className="w-full mt-2 px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-base opacity-70"
						/>
					</div>

					<div>
						<label className="text-base opacity-60">
							Email
						</label>
						<input
							value={user.email}
							disabled
							className="w-full mt-2 px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-base opacity-70"
						/>
					</div>

					<button className="bg-white/10 px-6 py-3 rounded-xl text-base font-medium">
						Edit profile
					</button>
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-6">
					Danger zone
				</h2>
				<button className="flex items-center gap-3 text-red-500 text-base hover:text-red-400">
					<Trash2 size={18} />
					Delete account
				</button>
			</div>
		</>
	)
}
