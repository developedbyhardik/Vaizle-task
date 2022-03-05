import assert from "assert";
import { solution, data } from "./main.mjs";

try {
  console.log("Testing Started");
  assert(solution(data), {
    Sun: 2,
    Mon: -6,
    Tue: 2,
    Wed: 2,
    Thu: 4,
    Fri: 6,
    Sat: 8,
  });
  console.log("  ✅ passed");
} catch (e) {
  console.log("  🚫 fail");
  console.error(e);
}
