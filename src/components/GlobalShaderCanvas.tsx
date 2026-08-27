'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import * as THREE from 'three'

// Custom GLSL Background Shaders
const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uRouteIntensity;
varying vec2 vUv;

// Simplex/Perlin-style hash & noise for smooth performance
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// 4-octave Fractional Brownian Motion
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.08;
    amplitude *= 0.48;
  }

  return value;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
  vec2 pointer = (uPointer - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  
  // Interactive pointer glow
  float pointerDist = length(uv - pointer);
  float pointerGlow = 0.065 / max(pointerDist, 0.05);

  // Evolving dual-frequency energy waves
  float waveA = fbm(uv * 1.8 + vec2(uTime * 0.04, -uTime * 0.02));
  float waveB = fbm(uv * 3.6 - vec2(uTime * 0.025, uTime * 0.035));
  
  // Soft energy ridges
  float ridge = abs(sin((uv.x + waveA * 0.3) * 6.0 + uTime * 0.25));
  float beam = smoothstep(0.88, 0.2, ridge) * 0.38;
  
  // Subtle holographic grid lines
  float grid = smoothstep(0.985, 1.0, sin((uv.x + waveB * 0.06) * 32.0)) * 0.06;

  // Site Brand Palette
  vec3 ink = vec3(0.039, 0.039, 0.039);         // #0A0A0A
  vec3 lime = vec3(0.839, 1.0, 0.361);         // #D6FF5C
  vec3 neon = vec3(0.478, 1.0, 0.824);         // #7AFFD2
  vec3 amber = vec3(1.0, 0.722, 0.420);        // #FFB86B
  vec3 bone = vec3(0.929, 0.922, 0.902);        // #EDEBE6

  // Vignette gradient for dark edge fade
  float vignette = smoothstep(1.15, 0.25, length(uv));
  
  // Base atmosphere
  vec3 color = ink;
  color += neon * beam * 0.32 * uRouteIntensity;
  color += amber * waveB * 0.06 * uRouteIntensity;
  color += bone * grid * 0.8 * uRouteIntensity;
  color += lime * pointerGlow * 0.075;
  color *= 0.55 + vignette * 0.75;

  gl_FragColor = vec4(color, 1.0);
}
`

// Particle Shaders
const particleVertexShader = `
uniform float uTime;
uniform vec2 uPointer;
attribute float aSeed;
attribute float aSize;
varying float vSeed;

void main() {
  vSeed = aSeed;
  vec3 pos = position;
  
  // Gentle floating drift
  pos.z += sin(uTime * 0.5 + aSeed * 10.0) * 0.12;
  pos.x += (uPointer.x - 0.5) * 0.12 * sin(aSeed * 20.0);
  pos.y += (uPointer.y - 0.5) * 0.12 * cos(aSeed * 16.0);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (aSize + aSeed * 3.0) * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`

const particleFragmentShader = `
precision highp float;
varying float vSeed;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float dist = length(uv);
  if (dist > 0.5) discard;
  
  float mask = smoothstep(0.5, 0.0, dist);
  
  // Blend between neon cyan and lime based on seed
  vec3 color = mix(vec3(0.839, 1.0, 0.361), vec3(0.478, 1.0, 0.824), vSeed);
  gl_FragColor = vec4(color, mask * 0.55);
}
`

export default function GlobalShaderCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const intensityTargetRef = useRef<number>(1.0)
  const uniformsRef = useRef<{
    uTime: { value: number }
    uResolution: { value: THREE.Vector2 }
    uPointer: { value: THREE.Vector2 }
    uRouteIntensity: { value: number }
  } | null>(null)

  // Route-based scene tone adjustment
  useEffect(() => {
    if (pathname === '/') {
      intensityTargetRef.current = 1.0
    } else if (pathname.startsWith('/lab')) {
      intensityTargetRef.current = 0.85
    } else {
      intensityTargetRef.current = 0.65
    }
  }, [pathname])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false,
      })
    } catch (e) {
      console.warn('WebGL initialization fallback:', e)
      return
    }

    // Limit pixel ratio for mobile / high-DPI GPU efficiency
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setClearColor(0x0a0a0a, 1)
    renderer.domElement.className = 'fixed inset-0 h-full w-full pointer-events-none'
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 20)
    camera.position.z = 2.4

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.5, 0.5) },
      uRouteIntensity: { value: intensityTargetRef.current },
    }
    uniformsRef.current = uniforms

    // Background GLSL Plane
    const backgroundGeo = new THREE.PlaneGeometry(2, 2)
    const backgroundMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: false,
      depthTest: false,
    })
    const background = new THREE.Mesh(backgroundGeo, backgroundMat)
    background.frustumCulled = false
    scene.add(background)

    // Ambient 3D Particle Constellation
    const particleCount = 320
    const positions = new Float32Array(particleCount * 3)
    const seeds = new Float32Array(particleCount)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.3 + Math.random() * 2.2
      const angle = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(angle) * radius * 1.3
      positions[i * 3 + 1] = Math.sin(angle) * radius * 0.8
      positions[i * 3 + 2] = -0.3 - Math.random() * 2.8
      seeds[i] = Math.random()
      sizes[i] = 2.5 + Math.random() * 3.0
    }

    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))
    particleGeo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    const clock = new THREE.Clock()
    let animationFrame = 0
    let isTabVisible = !document.hidden

    const resize = () => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      uniforms.uResolution.value.set(
        width * renderer.getPixelRatio(),
        height * renderer.getPixelRatio()
      )
    }

    let targetPointerX = 0.5
    let targetPointerY = 0.5
    let currentPointerX = 0.5
    let currentPointerY = 0.5

    const onPointerMove = (event: PointerEvent) => {
      const width = window.innerWidth || 1
      const height = window.innerHeight || 1
      targetPointerX = THREE.MathUtils.clamp(event.clientX / width, 0, 1)
      targetPointerY = THREE.MathUtils.clamp(1 - event.clientY / height, 0, 1)
    }

    const onVisibilityChange = () => {
      isTabVisible = !document.hidden
      if (isTabVisible) {
        clock.start()
      } else {
        clock.stop()
      }
    }

    const render = () => {
      if (isTabVisible) {
        const elapsed = clock.getElapsedTime()
        uniforms.uTime.value = prefersReducedMotion ? elapsed * 0.05 : elapsed

        // Smooth pointer interpolation
        currentPointerX += (targetPointerX - currentPointerX) * 0.05
        currentPointerY += (targetPointerY - currentPointerY) * 0.05
        uniforms.uPointer.value.set(currentPointerX, currentPointerY)

        // Smooth route intensity interpolation
        uniforms.uRouteIntensity.value +=
          (intensityTargetRef.current - uniforms.uRouteIntensity.value) * 0.05

        // Gentle particle rotation
        if (!prefersReducedMotion) {
          particles.rotation.z = uniforms.uTime.value * 0.018
          particles.rotation.x = Math.sin(uniforms.uTime.value * 0.12) * 0.06
        }

        renderer.render(scene, camera)
      }
      animationFrame = window.requestAnimationFrame(render)
    }

    resize()
    render()

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibilityChange)

      // Clean disposal
      backgroundGeo.dispose()
      backgroundMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
      if (renderer.domElement && mount.contains(renderer.domElement)) {
        renderer.domElement.remove()
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  )
}
