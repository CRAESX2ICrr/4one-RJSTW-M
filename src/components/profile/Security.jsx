export default function Security() {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-6">
				Security
			</h2>

			<div className="space-y-4 max-w-xl">
				<button className="w-full flex justify-between items-center px-6 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-base">
					<span>Change password</span>
					<span className="opacity-50">→</span>
				</button>

				<button className="w-full flex justify-between items-center px-6 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-base">
					<span>Active sessions</span>
					<span className="opacity-50">→</span>
				</button>
			</div>
		</div>
	)
}
