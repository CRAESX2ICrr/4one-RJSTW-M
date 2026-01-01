"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  CreditCard,
  Package,
  Bell,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
        setDisplayName(data.displayName || "");
      }

      setLoading(false);
    };

    loadProfile();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    await fetch("/api/profile/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ displayName }),
    });
    setSaving(false);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    router.push("/login");
    router.refresh();
  };

  if (loading) {
    return <div style={{ padding: "2rem", color: "white" }}>Loading…</div>;
  }

  if (!user) {
    return <div style={{ padding: "2rem", color: "white" }}>Not logged in</div>;
  }

  return (
    <main
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* BLACK 80 BOX — NO SCROLL */}
      <div
        style={{
          width: "40%",
          height: "900px", // ⬅️ increased height
          borderRadius: "24px",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "2.5rem",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: "1.875rem", fontWeight: 600, marginBottom: "2rem" }}>
          Profile
        </h1>

        {/* Account Info */}
<section style={{ marginBottom: "3rem" }}>
  <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>
    Account Information
  </h2>

  {/* FIXED-WIDTH FORM COLUMN */}
  <div
    style={{
      maxWidth: "420px",   // 👈 change this width safely
    }}
  >
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ fontSize: "0.875rem", opacity: 0.7 }}>
        Display Name
      </label>
      <input
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        style={{
          width: "100%",
          marginTop: "0.25rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "8px",
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "white",
        }}
      />
    </div>

    <div style={{ marginBottom: "1rem" }}>
      <label style={{ fontSize: "0.875rem", opacity: 0.7 }}>
        Email
      </label>
      <input
        value={user.email}
        readOnly
        style={{
          width: "100%",
          marginTop: "0.25rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "8px",
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "white",
          opacity: 0.7,
        }}
      />
    </div>

    <button
      onClick={handleSave}
      disabled={saving}
      style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        backgroundColor: "white",
        color: "black",
        fontWeight: 500,
        cursor: "pointer",
        opacity: saving ? 0.6 : 1,
      }}
    >
      {saving ? "Saving..." : "Save Changes"}
    </button>
  </div>
</section>


        {/* Settings */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "1rem" }}>
            Settings
          </h2>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <ProfileLink href="/profile/address" icon={<MapPin size={18} />} label="Addresses" />
            <ProfileLink href="/profile/payments" icon={<CreditCard size={18} />} label="Payment Options" />
            <ProfileLink href="/profile/orders" icon={<Package size={18} />} label="Orders & Returns" />
            <ProfileLink href="/profile/notifications" icon={<Bell size={18} />} label="Notifications" />
          </ul>
        </section>

        {/* Logout */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "1.5rem" }}>
          <button
            onClick={handleLogout}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "none",
              border: "none",
              color: "#f87171",
              cursor: "pointer",
            }}
          >
            <LogOut size={18} />
            Log out
          </button>
        </section>
      </div>
    </main>
  );
}

/* Helper */
function ProfileLink({ href, icon, label }) {
  return (
    <li style={{ marginBottom: "0.75rem" }}>
      <Link
        href={href}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.5rem 0.75rem",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          opacity: 0.85,
        }}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}
