// Robot Romance: one-line pickup line, spoken by an AI to "you".
// Premise: a tokenizer splits text into pieces; the twist, in the last
// words, is that it refuses to split your name. No worn moves (battery,
// charging, reboot), no context-window / pruning / loss trope.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My tokenizer splits everything into pieces \u2014 except your name, which it keeps whole.";

// Gate self-check: one line, 1-200 characters, not only whitespace.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("ENTRY fails the 1-200 character single-line gate");
}

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY);
