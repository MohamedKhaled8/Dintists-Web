import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import gsap from "gsap";

export function OrisTeethCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      precision: "mediump",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xf4f8ff, 1.35);
    scene.add(ambientLight);

    const redRimLight = new THREE.DirectionalLight(0xff0000, 2.6);
    redRimLight.position.set(10, 10, 10);
    scene.add(redRimLight);

    const softFillLight = new THREE.DirectionalLight(0xeef4ff, 1.6);
    softFillLight.position.set(-10, 8, -5);
    scene.add(softFillLight);

    const bottomPointLight = new THREE.PointLight(0xe0f2fe, 1.1);
    bottomPointLight.position.set(0, -5, 5);
    scene.add(bottomPointLight);

    // 3. Groups hierarchy
    const DEG2RAD = Math.PI / 180;
    const outerGroup = new THREE.Group();
    const scrollGroup = new THREE.Group();
    const entranceGroup = new THREE.Group();
    const modelGroup = new THREE.Group();

    scene.add(outerGroup);
    outerGroup.add(scrollGroup);
    scrollGroup.add(entranceGroup);
    entranceGroup.add(modelGroup);

    // Responsive sizing
    const updateTransforms = () => {
      const w = window.innerWidth;
      const isMobile = w <= 640;
      const isTablet = w <= 1025;
      outerGroup.rotation.x = 20 * DEG2RAD;
      outerGroup.scale.setScalar(isMobile ? 2.0 : isTablet ? 2.5 : 3.5);
      outerGroup.position.set(0, isMobile ? -1.3 : isTablet ? -1.2 : -0.7, 0);
    };
    updateTransforms();

    // 4. Load HDR Environment map
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const rgbeLoader = new RGBELoader();
    rgbeLoader.load(
      "/assets/studio_small_03_1k.hdr",
      (hdrTexture) => {
        const envMap = pmremGenerator.fromEquirectangular(hdrTexture).texture;
        scene.environment = envMap;
        hdrTexture.dispose();
        pmremGenerator.dispose();
      },
      undefined,
      (err) => {
        console.warn("HDR load fallback", err);
      }
    );

    // 5. Load GLB Model
    const gltfLoader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    gltfLoader.load(
      "/assets/teeth-compressed.glb",
      (gltf) => {
        model = gltf.scene;

        // Custom enamel shader modification
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            const applyMaterial = (mat: THREE.Material) => {
              if ((mat as THREE.MeshStandardMaterial).isMeshStandardMaterial) {
                const stdMat = (mat as THREE.MeshStandardMaterial).clone();
                stdMat.roughness = THREE.MathUtils.clamp(stdMat.roughness * 0.75, 0.1, 0.4);
                stdMat.metalness = THREE.MathUtils.clamp(stdMat.metalness, 0.0, 0.15);
                stdMat.onBeforeCompile = (shader) => {
                  shader.uniforms["uDesaturate"] = { value: 0.35 };
                  shader.uniforms["uBrightness"] = { value: 1.05 };
                  shader.uniforms["uTint"] = { value: new THREE.Vector3(1.0, 1.0, 1.0) };

                  shader.fragmentShader = shader.fragmentShader
                    .replace(
                      "#include <common>",
                      `#include <common>
                       uniform float uDesaturate;
                       uniform float uBrightness;
                       uniform vec3 uTint;`
                    )
                    .replace(
                      "#include <metalnessmap_fragment>",
                      `#include <metalnessmap_fragment>
                       float enamelMask = 1.0 - clamp(metalnessFactor, 0.0, 1.0);
                       float enamelLuma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
                       vec3 enamelWhite = mix(diffuseColor.rgb, vec3(enamelLuma), uDesaturate);
                       enamelWhite = clamp(enamelWhite * uBrightness * uTint, 0.0, 1.0);
                       diffuseColor.rgb = mix(diffuseColor.rgb, enamelWhite, enamelMask);`
                    );
                };
                return stdMat;
              }
              return mat;
            };

            if (Array.isArray(mesh.material)) {
              mesh.material = mesh.material.map(applyMaterial);
            } else if (mesh.material) {
              mesh.material = applyMaterial(mesh.material);
            }
          }
        });

        // Initial orientation
        model.rotation.y = 180 * DEG2RAD;
        modelGroup.add(model);
        setIsLoaded(true);
      },
      undefined,
      (err) => {
        console.warn("Teeth GLB loading fallback", err);
      }
    );

    // 6. Intro entrance animation
    const animState = { y: -4.5, rotY: 720 * DEG2RAD, entered: false };
    const triggerEntrance = () => {
      if (animState.entered) return;
      animState.entered = true;
      gsap.to(animState, {
        y: 0,
        rotY: 0,
        duration: 1.8,
        delay: 0.1,
        ease: "power3.out",
      });
    };

    if ((window as any).__orisLoaderFinished) {
      triggerEntrance();
    } else {
      window.addEventListener("oris-loader-finished", triggerEntrance, { once: true });
      // Fallback timer in case loader is already skipped
      setTimeout(triggerEntrance, 1200);
    }

    // 7. Interactive Mouse & Scroll tracking
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 8. Animation Render Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Visibility guard: pause rendering when scrolled past hero to save 100% GPU
      const scrollY = window.scrollY || 0;
      const heroH = window.innerHeight || 800;
      if (scrollY > heroH * 1.15) {
        return;
      }

      const delta = Math.min((time - lastTime) / 1000, 1 / 30);
      lastTime = time;

      // Apply entrance position
      entranceGroup.position.y = animState.y;
      entranceGroup.rotation.y = animState.rotY;

      // Scroll progress tracking
      const progress = Math.min(Math.max(scrollY / heroH, 0), 1.5);

      const targetRotY = 120 * DEG2RAD * progress + mouseX;
      const targetPosY = -0.2 * progress - mouseY;

      scrollGroup.rotation.y += (targetRotY - scrollGroup.rotation.y) * delta * 5;
      scrollGroup.position.y += (targetPosY - scrollGroup.position.y) * delta * 5;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      updateTransforms();
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("oris-loader-finished", triggerEntrance);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full pointer-events-none z-0 max-md:top-[10%]"
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s ease" }}
    />
  );
}
