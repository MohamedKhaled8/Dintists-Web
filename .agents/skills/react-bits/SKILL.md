---
name: react-bits
description: "React Bits animated UI library skill. Guidance and catalog for 110+ interactive React animation components, shaders, text effects, cards, and backgrounds. Compatible with shadcn CLI, Tailwind CSS v4, and modern React stacks."
---

# React Bits

React Bits (`reactbits.dev`) is an open-source collection of animated, interactive, and customizable React components.

## Configuration & Setup

### Registry Configuration in `components.json`
To install components directly using the `shadcn` CLI, ensure `components.json` includes the `@react-bits` registry:

```json
{
  "registries": {
    "@react-bits": "https://reactbits.dev/r/{name}.json"
  }
}
```

### Installation via shadcn CLI
Format: `@react-bits/<ComponentName>-<Flavor>`
Flavors:
- `TS-TW`: TypeScript + Tailwind CSS (Recommended for modern React/Vite/TanStack projects)
- `JS-TW`: JavaScript + Tailwind CSS
- `TS-CSS`: TypeScript + Plain CSS
- `JS-CSS`: JavaScript + Plain CSS

Example:
```bash
npx shadcn@latest add @react-bits/SplitText-TS-TW
npx shadcn@latest add @react-bits/Aurora-TS-TW
npx shadcn@latest add @react-bits/Magnet-TS-TW
```

---

## Component Catalog & Categories

### 1. Text Animations
Add dynamic typography and kinetic text effects to headers, hero sections, and titles.
- **SplitText**: Characters or words reveal with staggered spring animations.
- **BlurText**: Smooth letter-by-letter blur-in and opacity transitions.
- **ShinyText**: Shimmering gradient light sweep across text on hover or loop.
- **DecryptedText**: Cyberpunk-style matrix decoding scramble effect on text hover or view.
- **TrueFocus**: Interactive spotlight blur that focuses on hovered or targeted words.
- **CountUp**: Smooth numerical counting animation for metrics, statistics, and counters.
- **ScrollVelocity**: Infinite horizontal marquee that speeds up on scroll.

### 2. Animated & Shader Backgrounds
High-performance WebGL, canvas, and CSS interactive backdrops.
- **Aurora**: Fluid, glowing northern lights gradient wave.
- **LiquidChrome**: Reflective, metallic liquid distortion animation.
- **Hyperspeed**: Star-wars style perspective warp speed streaks.
- **Squares**: Interactive grid where hovered squares gently illuminate and pulse.
- **Waves**: 3D geometric waves responding to cursor movement.
- **StarBorder**: Moving light beam around card or container borders.
- **Iridescence**: Shifting pearlescent oil-slick color waves.
- **GridDistortion**: Interactive physics-based grid warp following the cursor.

### 3. Interactive Animations & Micro-interactions
Enhance tactile feel and user feedback.
- **Magnet**: Snaps nearby elements or buttons gently toward the cursor.
- **ClickSpark**: Emits vibrant particle sparks upon clicking anywhere on the element.
- **SplashCursor**: Fluid dye simulation reacting to cursor drags.
- **BlobCursor**: Liquid morphing blob that trails cursor movement.
- **FollowCursor**: Custom trailing cursor element with smooth spring physics.

### 4. Interactive Components & Cards
- **TiltedCard**: 3D perspective tilt on hover with dynamic glare overlay.
- **SpotlightCard**: Subtle radial spotlight following cursor position across card edges.
- **InfiniteScroll**: Smooth looping carousel for logos, testimonials, and showcases.
- **ElasticSlider**: Physics-based rubber-band drag and release slider.
- **Masonry**: Animated responsive masonry grid with filter and reorder animations.

---

## Integration Guidelines

### Typical Dependencies
Many React Bits components use:
- `framer-motion` or `gsap` for physics and tweening
- `three` (and `@react-three/fiber`) for WebGL canvas shaders
- `lucide-react` for icons

When installing a shader background (e.g. `LiquidChrome`, `Aurora`), ensure Three.js is installed:
```bash
npm install three
```

### Tailwind CSS v4 Compatibility
React Bits Tailwind flavors use standard utility classes. With Tailwind CSS v4, custom utility keyframes defined in `@keyframes` or CSS variables work seamlessly inside `styles.css`.
