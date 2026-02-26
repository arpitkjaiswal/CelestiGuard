export function computeRiskScore(distanceKm) {
  if (distanceKm < 1) return 95;
  if (distanceKm < 5) return 75;
  if (distanceKm < 10) return 50;
  if (distanceKm < 50) return 20;
  return 5;
}
