export function simulateConjunction() {
  const distance = Math.random() * 50; // km
  const deltaV = distance < 10 ? 0.5 : 0.05; // m/s maneuver suggestion

  return { distance, deltaV };
}
