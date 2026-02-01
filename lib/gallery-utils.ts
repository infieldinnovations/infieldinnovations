// lib/gallery-utils.ts
export function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: T[], rng: () => number = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Generate a longer sequence by repeatedly shuffling the base items,
 * ensuring no immediate duplicate id between blocks.
 * Produces clones with unique instance ids so React keys remain unique.
 */
export function generateInfiniteSequence<T extends { id: string }>(
  base: T[],
  targetLength: number,
  rng: () => number = Math.random
): (T & { id: string })[] {
  if (base.length === 0) return [];
  const seq: (T & { id: string })[] = [];
  let blockIndex = 0;

  while (seq.length < targetLength) {
    let block = shuffle(base, rng);
    // ensure first item in the next block doesn't duplicate the last item in seq
    if (seq.length > 0 && block.length > 1 && block[0].id === seq[seq.length - 1].id) {
      // swap block[0] with another element
      [block[0], block[1]] = [block[1], block[0]];
    }

    for (let i = 0; i < block.length && seq.length < targetLength; i++) {
      const item = block[i];
      seq.push({ ...item, id: `${item.id}-${blockIndex}-${i}` }); // unique clone id
    }
    blockIndex++;
  }

  return seq;
}