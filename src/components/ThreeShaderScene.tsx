'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

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
varying vec2 vUv;

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

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(p);
    p *= 2.05;
    amplitude *= 0.48;
  }

  return value;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;
  vec2 pointer = (uPointer - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  float pointerGlow = 0.08 / max(distance(uv, pointer), 0.06);

  float waveA = fbm(uv * 2.0 + vec2(uTime * 0.055, -uTime * 0.025));
  float waveB = fbm(uv * 4.0 - vec2(uTime * 0.035, uTime * 0.045));
  float ridge = abs(sin((uv.x + waveA * 0.34) * 7.0 + uTime * 0.32));
  float beam = smoothstep(0.86, 0.18, ridge) * 0.42;
  float grid = smoothstep(0.98, 1.0, sin((uv.x + waveB * 0.08) * 38.0)) * 0.08;

  vec3 ink = vec3(0.015, 0.016, 0.017);
  vec3 green = vec3(0.47, 1.0, 0.73);
  vec3 amber = vec3(1.0, 0.64, 0.28);
  vec3 bone = vec3(0.93, 0.92, 0.88);

  float vignette = smoothstep(1.0, 0.18, length(uv));
  vec3 color = ink;
  color += green * beam * 0.34;
  color += amber * waveB * 0.08;
  color += bone * grid;
  color += green * pointerGlow * 0.08;
  color *= 0.64 + vignette * 0.8;

  gl_FragColor = vec4(color, 1.0);
}
`

const particleVertexShader = `
uniform float uTime;
uniform vec2 uPointer;
attribute float aSeed;
varying float vSeed;

void main() {
  vSeed = aSeed;
  vec3 pos = position;
  pos.z += sin(uTime * 0.6 + aSeed * 12.0) * 0.08;
  pos.x += (uPointer.x - 0.5) * 0.08 * sin(aSeed * 24.0);
  pos.y += (uPointer.y - 0.5) * 0.08 * cos(aSeed * 18.0);

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (3.5 + aSeed * 3.0) * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`

const particleFragmentShader = `
precision highp float;
varying float vSeed;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float mask = smoothstep(0.5, 0.0, length(uv));
  vec3 color = mix(vec3(0.84, 1.0, 0.36), vec3(0.45, 1.0, 0.82), vSeed);
  gl_FragColor = vec4(color, mask * 0.68);
}
`

export default function ThreeShaderScene() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setClearColor(0x0a0a0a, 1)
    renderer.domElement.className = 'block h-full w-full'
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 20)
    camera.position.z = 2.2

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: new THREE.Vector2(0.62, 0.54) },
    }

    const background = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        depthWrite: false,
        depthTest: false,
      }),
    )
    background.frustumCulled = false
    scene.add(background)

    const particleCount = 420
    const positions = new Float32Array(particleCount * 3)
    const seeds = new Float32Array(particleCount)

    for (let index = 0; index < particleCount; index++) {
      const radius = 0.25 + Math.random() * 1.9
      const angle = Math.random() * Math.PI * 2
      positions[index * 3] = Math.cos(angle) * radius * 1.25
      positions[index * 3 + 1] = Math.sin(angle) * radius * 0.72
      positions[index * 3 + 2] = -0.4 - Math.random() * 2.7
      seeds[index] = Math.random()
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1))

    const particleMaterial = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    const clock = new THREE.Clock()
    let animationFrame = 0

    const resize = () => {
      const width = Math.max(1, mount.clientWidth)
      const height = Math.max(1, mount.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio())
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      uniforms.uPointer.value.set(
        THREE.MathUtils.clamp((event.clientX - rect.left) / rect.width, 0, 1),
        THREE.MathUtils.clamp(1 - (event.clientY - rect.top) / rect.height, 0, 1),
      )
    }

    const render = () => {
      const elapsed = clock.getElapsedTime()
      uniforms.uTime.value = prefersReducedMotion ? elapsed * 0.08 : elapsed
      particles.rotation.z = uniforms.uTime.value * 0.025
      particles.rotation.x = Math.sin(uniforms.uTime.value * 0.18) * 0.08
      renderer.render(scene, camera)
      animationFrame = window.requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    mount.addEventListener('pointermove', onPointerMove)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      mount.removeEventListener('pointermove', onPointerMove)
      background.geometry.dispose()
      particleGeometry.dispose()
      background.material.dispose()
      particleMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="!absolute inset-0 !z-0 overflow-hidden" aria-hidden="true" />
}
