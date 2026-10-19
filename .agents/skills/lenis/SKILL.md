---
name: lenis
description: "Lenis smooth scroll integration skill for modern web apps. Covers high-performance smooth scrolling, synchronization with GSAP ScrollTrigger, React hooks, modal locks, and TanStack Start setups."
---

# Lenis Smooth Scroll

Lenis is a lightweight, robust smooth scrolling library by Darkroom Engineering that provides fluid, physics-based scrolling without breaking native accessibility or touch device behavior.

## Installation

```bash
npm install lenis
```

## Basic Setup (Vanilla / Script)

```typescript
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential ease-out
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

## Perfect Sync with GSAP ScrollTrigger

When using GSAP ScrollTrigger alongside Lenis, do NOT use independent `requestAnimationFrame` loops. Instead, link Lenis's raf directly to GSAP's ticker:

```typescript
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// Update ScrollTrigger whenever Lenis scrolls
lenis.on('scroll', ScrollTrigger.update);

// Synchronize GSAP ticker with Lenis raf
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Turn off lagSmoothing so GSAP and Lenis never lose sync
gsap.ticker.lagSmoothing(0);
```

## React / TanStack Start Integration

Create a reusable smooth scroll hook or provider in React:

```tsx
// src/hooks/use-lenis.ts
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
```

## Useful Controls & Patterns

### 1. Scroll to Anchor or Target
```typescript
// Scroll to selector or number
lenis.scrollTo('#services', {
  offset: -80, // account for fixed header
  duration: 1.5,
  immediate: false,
});
```

### 2. Lock Scroll for Modals / Drawers
```typescript
// When opening modal:
lenis.stop();

// When closing modal:
lenis.start();
```

### 3. Exclude Specific Elements (e.g., Inner Scrollable Containers)
Add `data-lenis-prevent` to any scrollable element that should scroll independently without triggering smooth scroll:
```html
<div class="modal-body overflow-y-auto" data-lenis-prevent>
  <!-- Content here will use default scroll -->
</div>
```
