"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

const Pins = () => {
    const locations = [
        { name: "Brasil", lat: -14.2350, lon: -51.9253 }, // Centro do Brasil
        { name: "Australia", lat: -25.2744, lon: 133.7751 } // Centro da Austrália
    ];

    const radius = 2.0; // Raio da Terra

    return (
        <group>
            {locations.map((loc, index) => {
                // Conversão de Lat/Lon para coordenadas Cartesianas 3D
                const phi = (90 - loc.lat) * (Math.PI / 180);
                const theta = (loc.lon + 180) * (Math.PI / 180);

                const x = -(radius * Math.sin(phi) * Math.cos(theta));
                const z = radius * Math.sin(phi) * Math.sin(theta);
                const y = radius * Math.cos(phi);

                return (
                    <mesh key={index} position={[x, y, z]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial
                            color="#ff0000"
                            emissive="#ff0000"
                            emissiveIntensity={2}
                            toneMapped={false}
                        />
                    </mesh>
                );
            })}
        </group>
    );
};

const Earth = () => {
    const groupRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    // Load Earth textures from public URLs
    const earthTexture = useLoader(
        THREE.TextureLoader,
        "https://unpkg.com/three-globe@2.31.0/example/img/earth-blue-marble.jpg"
    );
    const bumpMap = useLoader(
        THREE.TextureLoader,
        "https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png"
    );

    // Auto-rotate when not dragging
    useFrame((_, delta) => {
        if (groupRef.current && !isDragging) {
            groupRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            <Sphere
                args={[2, 64, 64]}
                onPointerDown={() => setIsDragging(true)}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
            >
                <meshStandardMaterial
                    map={earthTexture}
                    bumpMap={bumpMap}
                    bumpScale={0.05}
                    metalness={0.1}
                    roughness={0.7}
                />
            </Sphere>
            <Pins />
        </group>
    );
};

const Atmosphere = () => {
    return (
        <Sphere args={[2.1, 64, 64]}>
            <meshStandardMaterial
                color="#4da6ff"
                transparent
                opacity={0.1}
                side={THREE.BackSide}
            />
        </Sphere>
    );
};

const Globe3D = () => {
    return (
        <div className="w-full h-full max-w-[280px] max-h-[280px] md:max-w-[380px] md:max-h-[380px] lg:max-w-[450px] lg:max-h-[450px] aspect-square mx-auto">
            <Canvas
                camera={{ position: [0, 0, 5.5], fov: 45 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={1.2} />
                <directionalLight position={[5, 3, 5]} intensity={2.5} />
                <directionalLight position={[-3, 2, -3]} intensity={1} />
                <directionalLight position={[0, 5, 0]} intensity={1} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Earth />
                <Atmosphere />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.5}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 4}
                />
            </Canvas>
        </div>
    );
};

export default Globe3D;
