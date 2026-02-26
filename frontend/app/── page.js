"use client";

import Globe from "../components/Globe";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Globe />
      <Dashboard />
    </div>
  );
}
