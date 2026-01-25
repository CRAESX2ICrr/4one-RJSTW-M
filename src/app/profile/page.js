"use client"

import { useState } from "react"
import {
	User,
	Lock,
	MapPin,
	CreditCard,
	Package,
	Bell,
	LogOut
} from "lucide-react"

import Account from "@/components/profile/Account"
import Security from "@/components/profile/Security"
import Orders from "@/components/profile/Orders"
import Addresses from "@/components/profile/Addresses"
import Payments from "@/components/profile/Payments"
import Notifications from "@/components/profile/Notifications"


export default function ProfilePage() {
	const [activeSection, setActiveSection] = useState("account")

	const user = {
		email: "user@example.com",
		displayName: "John Doe"
	}

	const baseItem =
		"w-full flex items-center gap-4 px-4 py-3 rounded-xl text-base text-left"
	const inactive = "opacity-80 hover:bg-white/5"
	const active = "bg-white/10"

	return (
		<main className="text-white py-32">
			<div className="max-w-[1400px] mx-auto px-10">
				<div className="grid grid-cols-12 gap-10">

					{/* LEFT CARD */}
					<aside className="col-span-4 rounded-3xl bg-black/70 p-8 space-y-8">

						<div>
							<h1 className="text-2xl font-semibold">Account</h1>
							<p className="opacity-60">{user.email}</p>
						</div>

<div className="space-y-2">
	<button
		onClick={() => setActiveSection("account")}
		className={`${baseItem} ${activeSection === "account" ? active : inactive}`}
	>
		<User size={20} />
		Account
	</button>

	<button
		onClick={() => setActiveSection("security")}
		className={`${baseItem} ${activeSection === "security" ? active : inactive}`}
	>
		<Lock size={20} />
		Security
	</button>

	<button
		onClick={() => setActiveSection("orders")}
		className={`${baseItem} ${activeSection === "orders" ? active : inactive}`}
	>
		<Package size={20} />
		Orders
	</button>

	<button
		onClick={() => setActiveSection("addresses")}
		className={`${baseItem} ${activeSection === "addresses" ? active : inactive}`}
	>
		<MapPin size={20} />
		Addresses
	</button>

	<button
		onClick={() => setActiveSection("payments")}
		className={`${baseItem} ${activeSection === "payments" ? active : inactive}`}
	>
		<CreditCard size={20} />
		Payments
	</button>

	<button
		onClick={() => setActiveSection("notifications")}
		className={`${baseItem} ${activeSection === "notifications" ? active : inactive}`}
	>
		<Bell size={20} />
		Notifications
	</button>
</div>


						<button className="flex items-center gap-3 text-red-400 text-base hover:text-red-300">
							<LogOut size={18} />
							Log out
						</button>
					</aside>

					{/* RIGHT CARD */}
<section className="col-span-8 rounded-3xl bg-black/70 p-10 space-y-14">
	{activeSection === "account" && <Account user={user} />}
	{activeSection === "security" && <Security />}
	{activeSection === "orders" && <Orders />}
	{activeSection === "addresses" && <Addresses />}
	{activeSection === "payments" && <Payments />}
	{activeSection === "notifications" && <Notifications />}
</section>



				</div>
			</div>
		</main>
	)
}
