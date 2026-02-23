export function computeRisk(distanceKm, relativeVelocity) {
  let score = 0;

  if (distanceKm < 10) score += 25;
  if (distanceKm < 5) score += 35;
  if (distanceKm < 2) score += 50;
  if (relativeVelocity > 2) score += 20;

  return Math.min(score, 100);
}
