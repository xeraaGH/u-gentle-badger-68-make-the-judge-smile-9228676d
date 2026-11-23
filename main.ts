import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "My neighbour's cat, who has hissed at me for a year, headbutted my ankle at 6 a.m. today and purred — I think we've finally signed the peace treaty.";

// The gate allows 1–200 characters, one line, not only whitespace: fail loudly otherwise.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...LINE].length}`);
}
if (LINE.trim().length === 0 || LINE.includes('\n')) {
  throw new Error('entry must be a single non-blank line');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
