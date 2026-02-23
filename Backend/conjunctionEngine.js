import satellite from "satellite.js";

export function propagateSatellite(tle1, tle2) {
  const satrec = satellite.twoline2satrec(tle1, tle2);
  const now = new Date();
  const positionAndVelocity = satellite.propagate(satrec, now);
  return positionAndVelocity.position;
}

export function calculateDistance(pos1, pos2) {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  const dz = pos1.z - pos2.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
