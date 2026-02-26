import express from "express";
import cors from "cors";
import * as satellite from "satellite.js";
import { computeRiskScore } from "./riskEngine.js";
import { simulateConjunction } from "./conjunctionEngine.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Sample TLE (ISS)
const tleLine1 =
  "1 25544U 98067A   24100.51083333  .00016717  00000+0  10270-3 0  9004";
const tleLine2 =
  "2 25544  51.6446  20.5797 0005447  23.4476  89.2583 15.49515389  9994";

const satrec = satellite.twoline2satrec(tleLine1, tleLine2);

app.get("/satellite", (req, res) => {
  const now = new Date();
  const positionAndVelocity = satellite.propagate(satrec, now);

  const gmst = satellite.gstime(now);
  const positionEci = positionAndVelocity.position;

  const positionGd = satellite.eciToGeodetic(positionEci, gmst);

  const lat = satellite.degreesLat(positionGd.latitude);
  const lon = satellite.degreesLong(positionGd.longitude);
  const height = positionGd.height;

  res.json({ lat, lon, height });
});

app.get("/risk", (req, res) => {
  const conjunctionData = simulateConjunction();
  const risk = computeRiskScore(conjunctionData.distance);

  res.json({
    distance: conjunctionData.distance,
    riskScore: risk,
    suggestedDeltaV: conjunctionData.deltaV
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
