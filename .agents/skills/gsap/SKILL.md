---
name: gsap
description: "GreenSock Animation Platform (GSAP 3) animation skill for high-performance web animations, timelines, ScrollTrigger, Flip, Observer, text animations, and seamless React/TanStack integration."
---

# GSAP (GreenSock Animation Platform)

GSAP is the industry standard for high-performance, robust JavaScript animations across modern web applications.

## Core Concepts & Cheatsheet

### 1. Basic Tweens
```javascript
import gsap from 'gsap';

// To / From / FromTo
gsap.to(".element", { x: 100, y: 50, duration: 1, ease: "power2.out" });
gsap.from(".element", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" });
gsap.fromTo(".element", 
  { opacity: 0, y: 30 }, 
  { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
);
```

### 2. Timelines
Use timelines to orchestrate sequences of animations with relative or absolute timing.
```javascript
const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });

tl.from(".hero-title", { y: 40, opacity: 0 })
  .from(".hero-subtitle", { y: 20, opacity: 0 }, "-=0.3") // overlap by 0.3s
  .from(".hero-cta", { scale: 0.9, opacity: 0 }, "<0.2") // start 0.2s after previous start
  .from(".hero-card", { y: 50, opacity: 0, stagger: 0.15 }, "-=0.2");
```

### 3. ScrollTrigger Plugin
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll-reveal", {
  scrollTrigger: {
    trigger: ".scroll-reveal",
    start: "top 80%", // when top of element hits 80% from top of viewport
    end: "bottom 20%",
    toggleActions: "play none none reverse", // onEnter, onLeave, onEnterBack, onLeaveBack
    markers: false // set true for debugging
  },
  opacity: 1,
  y: 0,
  duration: 1
});

// Scrub animation (tied to scroll position)
gsap.to(".parallax-bg", {
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1 // smooth scrubbing with 1s catchup
  },
  yPercent: -20,
  ease: "none"
});

// Pinning elements
gsap.to(".pinned-panel", {
  scrollTrigger: {
    trigger: ".pinned-container",
    start: "top top",
    end: "+=1500",
    pin: true,
    scrub: true
  }
});
```

### 4. Integration in React & TanStack Start

Always clean up GSAP animations to prevent memory leaks, duplicate triggers, and layout issues:

```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context handles scoping selector queries and automatic cleanup
    const ctx = gsap.context(() => {
      gsap.from(".card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);

    return () => ctx.revert(); // Reverts all animations and kills ScrollTriggers
  }, []);

  return (
    <div ref={containerRef}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
    </div>
  );
}
```

### 5. Performance Best Practices
- **Animate transforms and opacity**: Prefer `x`, `y`, `scale`, `rotation`, `opacity` instead of `top`, `left`, `width`, `height`, `margin` to ensure animations run on the GPU (compositor thread).
- **Use `will-change: transform`** for heavy animating elements.
- **Set `overwrite: "auto"`** on tweens that might interrupt each other.
- **Refresh ScrollTrigger** after dynamic content loads or route transitions: `ScrollTrigger.refresh()`.
