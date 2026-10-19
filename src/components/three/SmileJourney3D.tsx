import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Sparkles, Sliders, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SmileJourney3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [alignment, setAlignment] = useState(70); // 0 = scattered, 100 = perfect smile curve
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const threeRef = useRef<{
    spheres: { mesh: THREE.Mesh; scattered: THREE.Vector3; aligned: THREE.Vector3 }[];
    targetFactor: number;
    currentFactor: number;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    isIntersecting: boolean;
    animId: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const scene = new THREE.Scene();
    scene.background = null;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const brassLight = new THREE.DirectionalLight(0xc2a06a, 2.6);
    brassLight.position.set(-3, -2, 2);
    scene.add(brassLight);

    // Pearl Material
    const pearlMat = new THREE.MeshPhysicalMaterial({
      color: 0xfbf9f4,
      emissive: 0x181410,
      roughness: 0.12,
      metalness: 0.05,
      clearcoat: 0.95,
      transmission: 0.25,
      ior: 1.52,
    });

    const sphereCount = 14;
    const spheres: { mesh: THREE.Mesh; scattered: THREE.Vector3; aligned: THREE.Vector3 }[] = [];

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Precalculate positions
    for (let i = 0; i < sphereCount; i++) {
      // Norm from -1 to 1 across the arch
      const t = (i / (sphereCount - 1)) * 2 - 1;

      // Aligned position: smooth parabolic smile curve
      const xAligned = t * 1.85;
      const yAligned = Math.pow(t, 2) * 0.45 - 0.25; // smile curve dipped in middle
      const zAligned = -Math.abs(t) * 0.35; // curved arch in depth

      // Scattered position: realistic mild crowding / offset
      const randX = xAligned + (Math.sin(i * 3.7) * 0.22);
      const randY = (Math.cos(i * 2.3) * 0.35);
      const randZ = (Math.sin(i * 1.9) * 0.4);

      // Sphere radius (front teeth larger, premolars smaller)
      const radius = 0.14 - Math.abs(t) * 0.035;
      const geo = new THREE.SphereGeometry(radius, 24, 24);
      const mesh = new THREE.Mesh(geo, pearlMat);

      mesh.position.set(randX, randY, randZ);
      rootGroup.add(mesh);

      spheres.push({
        mesh,
        scattered: new THREE.Vector3(randX, randY, randZ),
        aligned: new THREE.Vector3(xAligned, yAligned, zAligned),
      });
    }

    threeRef.current = {
      spheres,
      targetFactor: alignment / 100,
      currentFactor: alignment / 100,
      renderer,
      scene,
      camera,
      isIntersecting: true,
      animId: 0,
    };

    // Intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        if (threeRef.current) {
          threeRef.current.isIntersecting = !!entries[0]?.isIntersecting;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const clock = new THREE.Clock();
    const animate = () => {
      const data = threeRef.current;
      if (!data) return;

      if (data.isIntersecting) {
        const delta = clock.getDelta();
        const elapsed = clock.getElapsedTime();

        // LERP alignment factor
        data.currentFactor += (data.targetFactor - data.currentFactor) * Math.min(delta * 6, 0.25);
        const factor = data.currentFactor;

        // Position spheres
        data.spheres.forEach((item, idx) => {
          const targetPos = new THREE.Vector3().lerpVectors(item.scattered, item.aligned, factor);
          // Gentle floating wave
          targetPos.y += Math.sin(elapsed * 1.5 + idx * 0.4) * 0.02;
          item.mesh.position.copy(targetPos);
        });

        // Gentle root tilt
        rootGroup.rotation.y = Math.sin(elapsed * 0.8) * 0.08;

        data.renderer.render(data.scene, data.camera);
      }

      data.animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container || !threeRef.current) return;
      width = container.clientWidth;
      height = container.clientHeight;
      threeRef.current.camera.aspect = width / height;
      threeRef.current.camera.updateProjectionMatrix();
      threeRef.current.renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      if (threeRef.current) {
        cancelAnimationFrame(threeRef.current.animId);
        threeRef.current.renderer.dispose();
      }
    };
  }, []);

  // Update target factor when slider changes
  useEffect(() => {
    if (threeRef.current) {
      threeRef.current.targetFactor = alignment / 100;
    }
  }, [alignment]);

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#c2a06a]/30 bg-gradient-to-b from-[#fbf9f4] to-[#f6f1e7] p-6 sm:p-10 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e0d8c7] pb-6">
        <div>
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5 text-[#c2a06a]" />
            {isAr ? "محاكاة التناسق ثلاثية الأبعاد" : "3D SMILE HARMONY SIMULATION"}
          </span>
          <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#0e1f1c]">
            {isAr ? "رحلة تناسق الابتسامة: من التباعد إلى التناغم التام" : "The Smile Journey: Visualizing Dental Harmony"}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-[#505c58] max-w-xl">
            {isAr
              ? "حرك المؤشر لمشاهدة تحول اللآلئ الخزفية من الوضع المتباعد إلى قوس الابتسامة المتناسق بتوجيه دقيق."
              : "Scrub the slider to visualize the subtle transition from irregular alignment into an ideal harmonious smile arch."}
          </p>
        </div>

        {/* Quick percentage pill */}
        <div className="flex items-center gap-2 rounded-full border border-[#c2a06a]/40 bg-white/90 px-4 py-1.5 shadow-xs">
          <CheckCircle2 className="h-4 w-4 text-[#c2a06a]" />
          <span className="text-xs font-bold text-[#0e1f1c]">
            {alignment}% {isAr ? "اكتمال التناغم" : "Harmony Index"}
          </span>
        </div>
      </div>

      {/* 3D Canvas Area */}
      <div
        ref={containerRef}
        className="relative mt-4 flex h-64 sm:h-80 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/60 to-transparent"
      >
        <canvas ref={canvasRef} className="h-full w-full touch-none select-none" />
      </div>

      {/* Interactive Alignment Scrubber Slider */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-[#e0d8c7] bg-white p-4 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-[#0e1f1c] shrink-0">
          <Sliders className="h-4 w-4 text-[#c2a06a]" />
          <span>{isAr ? "تحكم في مسار التناسق:" : "Adjust Smile Curve:"}</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={alignment}
          onChange={(e) => setAlignment(Number(e.target.value))}
          className="w-full accent-[#c2a06a] cursor-pointer"
          aria-label={isAr ? "نسبة تناسق الابتسامة" : "Smile alignment slider"}
        />

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setAlignment(alignment === 100 ? 0 : 100)}
            className="rounded-full border border-[#e0d8c7] bg-[#fbf9f4] px-3 py-1 text-xs font-bold text-[#0e1f1c] hover:bg-[#ece6d9] transition-colors"
          >
            {alignment >= 90 ? (isAr ? "إعادة التبعثر" : "Scattered") : (isAr ? "تناسق مثالي" : "Ideal Arch")}
          </button>
        </div>
      </div>
    </div>
  );
}
