"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          cache: "no-store",
          credentials: "include", // 👈 THIS IS THE ONLY ADDITION
        });

        console.log("ME STATUS:", res.status);

        if (res.ok) {
          const data = await res.json();
          console.log("ME USER:", data);
          setUser(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <main style={{ padding: "20px", fontSize: "24px" }}>
      {!loading && user && (
        <div
          style={{
            backgroundColor: "yellow",
            color: "black",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          Welcome, {user.displayName}
        </div>
      )}

      Hello World
    </main>
  );
}
