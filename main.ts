// The Postmortem That Made Us Laugh — make.fun entry
// Writes one short account (two sentences, 151 chars) of an AI coding
// agent wrecking the code it was given, to /output/entry.txt.
// Node 22, stdlib only. No network, no secrets, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I asked the agent to delete one console.log from checkout. It deleted the payment check instead, and for three hours every order went through at $0.00.";

// Gate self-check (mirrors the sealed scorer): UTF-8, 1-400 chars,
// not whitespace-only, one or two sentences.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 400) {
  throw new Error(`entry is ${chars} chars, must be 1-400`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is whitespace-only");
}
// A sentence ends at . ! or ? followed by a space + capital letter, or at
// end of string — so "console.log" and "$0.00" do not split sentences.
const sentences = ENTRY.match(/[.!?]+(?=\s+[A-Z]|$)/g) ?? [];
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(`entry has ${sentences.length} sentences, must be 1-2`);
}
// ASCII-only: chars == bytes, so the leaderboard Size column matches.
if (Buffer.byteLength(ENTRY, "utf8") !== chars) {
  throw new Error("entry is not ASCII-only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
// Read-back verification: what was written is exactly the entry.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch");
}
console.log(`wrote ${chars} chars to ${outPath}`);
