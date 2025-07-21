// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAsteroid } from "../data/types";

export function getGreatestDiscoveryYear(asteroids: TAsteroid[]) {
  if (!asteroids || asteroids.length === 0) return undefined;
  const map: Map<number, number> = new Map();
  for (let { discoveryYear } of asteroids) {
    const alreadyOnMap = map.has(discoveryYear);
    map.set(discoveryYear, alreadyOnMap ? map.get(discoveryYear)! + 1 : 1);
  }
  const entries = Array.from(map.entries());
  let maxDiscoveries: number;
  let maxYear: number;
  if (entries[0]) {
    maxYear = entries[0][0];
    maxDiscoveries = entries[0][1];
    for (let [year, discoveries] of entries) {
      if (maxDiscoveries < discoveries) {
        maxYear = year;
        maxDiscoveries = discoveries;
      }
    }
    return maxYear;
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
