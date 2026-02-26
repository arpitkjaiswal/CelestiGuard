export default function SatelliteCard({ data }) {
  return (
    <div style={{
      background: "#222",
      padding: "15px",
      borderRadius: "10px",
      marginTop: "20px"
    }}>
      <h3>Conjunction Alert</h3>
      <p>Miss Distance: {data.distance.toFixed(2)} km</p>
      <p>Risk Score: {data.riskScore}%</p>
      <p>Suggested ΔV: {data.suggestedDeltaV} m/s</p>
    </div>
  );
}
