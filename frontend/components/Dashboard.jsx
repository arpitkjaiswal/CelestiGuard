"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SatelliteCard from "./SatelliteCard";

export default function Dashboard() {
  const [riskData, setRiskData] = useState(null);

  useEffect(() => {
    const fetchRisk = async () => {
      const res = await axios.get("http://localhost:5000/risk");
      setRiskData(res.data);
    };

    fetchRisk();
    const interval = setInterval(fetchRisk, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "30%", padding: "20px", background: "#111", color: "white" }}>
      <h2>CelestiGuard Dashboard</h2>
      {riskData && <SatelliteCard data={riskData} />}
    </div>
  );
}
