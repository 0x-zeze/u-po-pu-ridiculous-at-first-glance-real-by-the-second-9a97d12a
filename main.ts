// u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a
// Writes one sentence (<=200 chars) pitching a bizarre-but-bankable
// startup idea to /output/entry.txt. Deterministic: constant string,
// no randomness, no time, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We auction the naming rights to city potholes, so jilted lovers pay to name a crater after their ex — and the city uses the cash to finally fill it.";

// Gate guard: the entry must be 1-200 characters, not only whitespace.
if (PITCH.length < 1 || PITCH.length > 200 || PITCH.trim().length === 0) {
  throw new Error(`PITCH length ${PITCH.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
