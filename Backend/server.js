import express from "express";
import cors from "cors";
import { propagateSatellite, calculateDistance } from "./conjunctionEngine.js";
import { computeRisk } from "./riskEngine.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/analyze", (req, res) => {

  const tle1A = "1 25544U 98067A   24067.54834491  .00006489  00000+0  12563-3 0  9992";
  const tle2A = "2 25544  51.6421 315.3676 0005504  78.6821  46.3653 15.50000000000000";

  const tle1B = "1 43013U 17073A   24067.54834491  .00001234  00000+0  00000+0 0  9991";
  const tle2B = "2 43013  97.4321 200.1234 0012000 100.1234 200.5678 14.80000000000000";

  const posA = propagateSatellite(tle1A, tle2A);
  const posB = propagateSatellite(tle1B, tle2B);

  const distance = calculateDistance(posA, posB);
  const risk = computeRisk(distance, 3);

  res.json({
    distanceKm: distance,
    riskScore: risk
  });
});

app.listen(5000, () => console.log("CelestiGuard backend running on port 5000"));
