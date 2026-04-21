import React, { useEffect, useRef } from "react";
import { MotionValue, useAnimationFrame } from "framer-motion";
import * as THREE from "three";

interface ChapterWebGLViewProps {
  imageSrc: string;
  progress: MotionValue<number>;
  isInView: boolean;
  objectPosition?: string;
  yShift?: number;
}

const ChapterWebGLView: React.FC<ChapterWebGLViewProps> = ({
  imageSrc,
  progress,
  isInView,
  objectPosition = "center",
  yShift = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const rafRef = useRef<number | null>(null);
  const uniformsRef = useRef<{
    progress: { value: number };
    uvScale: { value: THREE.Vector2 };
  }>({
    progress: { value: 0 },
    uvScale: { value: new THREE.Vector2(1, 1) },
  });

  const gridSize = 12;

  // Sync Progress in Frame Loop
  useAnimationFrame(() => {
    const currentProgress = progress.get();
    uniformsRef.current.progress.value = currentProgress;
    if (materialRef.current) {
      // Smoother opacity transition: start fading earlier but keep a higher minimum visibility
      materialRef.current.opacity =
        currentProgress < 0.1 ? 1 : 1 - currentProgress * 0.7;
    }
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 12;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const loader = new THREE.TextureLoader();
    loader.load(imageSrc, (texture) => {
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
      });

      material.onBeforeCompile = (shader) => {
        shader.uniforms.progress = uniformsRef.current.progress;
        shader.uniforms.uvScale = uniformsRef.current.uvScale;

        shader.vertexShader =
          `
          uniform float progress;
          uniform vec2 uvScale;
          attribute vec3 offset;
          attribute vec3 rotation;
          attribute vec2 uvOffset;

          mat3 rotationMatrixXYZ(vec3 r) {
            float cx = cos(r.x); float sx = sin(r.x);
            float cy = cos(r.y); float sy = sin(r.y);
            float cz = cos(r.z); float sz = sin(r.z);
            return mat3(
              cy * cz, cx * sz + sx * sy * cz, sx * sz - cx * sy * cz,
              -cy * sz, cx * cz - sx * sy * sz, sx * cz + cx * sy * sz,
              sy, -sx * cy, cx * cy
            );
          }
        ` + shader.vertexShader;

        shader.vertexShader = shader.vertexShader.replace(
          "#include <uv_vertex>",
          `
          #include <uv_vertex>
          vMapUv = vMapUv * uvScale + uvOffset;
        `,
        );

        shader.vertexShader = shader.vertexShader.replace(
          "#include <project_vertex>",
          `
          mat3 rotMat = rotationMatrixXYZ(progress * rotation);
          transformed = rotMat * transformed;
          vec4 mvPosition = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          mvPosition.xyz += progress * offset;
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;
        `,
        );
      };

      materialRef.current = material;

      const updateGrid = () => {
        const width = containerRef.current?.clientWidth || 500;
        const height = containerRef.current?.clientHeight || 600;
        const aspect = width / height;

        const vFOV = (camera.fov * Math.PI) / 180;
        const wHeight = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z);
        const wWidth = wHeight * aspect;

        const cellSize = wWidth / gridSize;
        const nx = gridSize;
        const ny = Math.ceil(wHeight / cellSize);
        const count = nx * ny;

        const geometry = new THREE.PlaneGeometry(cellSize, cellSize);
        const instancedGeometry = new THREE.InstancedBufferGeometry();
        instancedGeometry.index = geometry.index;
        instancedGeometry.attributes = geometry.attributes;

        const offsets = new Float32Array(count * 3);
        const rotations = new Float32Array(count * 3);
        const uvOffsets = new Float32Array(count * 2);

        const tAspectRatio = texture.image.width / texture.image.height;
        const gridAspectRatio = nx / ny;

        const uvS = new THREE.Vector2(1, 1);
        if (gridAspectRatio > tAspectRatio) {
          // Grid is wider than image: fill width, crop height
          uvS.set(1 / nx, tAspectRatio / gridAspectRatio / ny);
        } else {
          // Grid is taller than image: fill height, crop width
          uvS.set(gridAspectRatio / tAspectRatio / nx, 1 / ny);
        }
        uniformsRef.current.uvScale.value.copy(uvS);

        const totalUsedUvWidth = uvS.x * nx;
        const totalUsedUvHeight = uvS.y * ny;

        for (let i = 0; i < nx; i++) {
          for (let j = 0; j < ny; j++) {
            const idx = i * ny + j;
            offsets[idx * 3] = (Math.random() - 0.5) * 8;
            offsets[idx * 3 + 1] = (Math.random() - 0.5) * 8;
            offsets[idx * 3 + 2] = Math.random() * 5;

            const angle = Math.PI * 2;
            rotations[idx * 3] = (Math.random() - 0.5) * angle;
            rotations[idx * 3 + 1] = (Math.random() - 0.5) * angle;
            rotations[idx * 3 + 2] = (Math.random() - 0.5) * angle;

            // Apply objectPosition logic for framing (e.g., face focus)
            const offsetX = (1 - totalUsedUvWidth) / 2;
            let offsetY = (1 - totalUsedUvHeight) / 2;

            if (objectPosition === "top") {
              offsetY = 1 - totalUsedUvHeight; // Align to the top edge
            } else if (objectPosition === "bottom") {
              offsetY = 0; // Align to the bottom edge
            }

            uvOffsets[idx * 2] = uvS.x * i + offsetX;
            uvOffsets[idx * 2 + 1] = uvS.y * j + offsetY;
          }
        }

        instancedGeometry.setAttribute(
          "offset",
          new THREE.InstancedBufferAttribute(offsets, 3),
        );
        instancedGeometry.setAttribute(
          "rotation",
          new THREE.InstancedBufferAttribute(rotations, 3),
        );
        instancedGeometry.setAttribute(
          "uvOffset",
          new THREE.InstancedBufferAttribute(uvOffsets, 2),
        );

        if (meshRef.current) {
          scene.remove(meshRef.current);
          meshRef.current.dispose();
        }

        const mesh = new THREE.InstancedMesh(
          instancedGeometry,
          material,
          count,
        );
        const dummy = new THREE.Object3D();
        let k = 0;
        for (let i = 0; i < nx; i++) {
          for (let j = 0; j < ny; j++) {
            dummy.position.set(
              (i - (nx - 1) / 2) * cellSize,
              (j - (ny - 1) / 2) * cellSize + yShift * wHeight,
              0,
            );
            dummy.updateMatrix();
            mesh.setMatrixAt(k++, dummy.matrix);
          }
        }

        scene.add(mesh);
        meshRef.current = mesh;

        // Force an immediate render call after setup to prevent initial blank frame
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      };

      updateGrid();

      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        updateGrid();
      };

      window.addEventListener("resize", handleResize);
      handleResize();
    });

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        rendererRef.current.domElement.remove();
      }
      meshRef.current?.dispose();
      materialRef.current?.dispose();
    };
  }, [imageSrc]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: isInView ? 1 : 0 }}
    />
  );
};

export default ChapterWebGLView;
