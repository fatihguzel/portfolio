import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

const TechSphere = () => {
    const groupRef = useRef();
    const sphereRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphereRef.current.rotation.y = time * 0.2;
        groupRef.current.rotation.y = time * 0.1;
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <group ref={sphereRef}>
                    {/* İç Küre */}
                    <mesh>
                        <sphereGeometry args={[2, 32, 32]} />
                        <meshStandardMaterial
                            color="#3b82f6"
                            wireframe
                            transparent
                            opacity={0.3}
                        />
                    </mesh>

                    {/* Dış Küre */}
                    <mesh>
                        <sphereGeometry args={[2.2, 32, 32]} />
                        <meshStandardMaterial
                            color="#3b82f6"
                            wireframe
                            transparent
                            opacity={0.1}
                        />
                    </mesh>

                    {/* Tech Stack Text */}
                    {[
                        { text: "React", position: [0, 1.5, 0] },
                        { text: "Node.js", position: [1.5, 0, 0] },
                        { text: "Web3", position: [-1.5, 0, 0] },
                        { text: "GraphQL", position: [0, -1.5, 0] },
                    ].map((item, index) => (
                        <Html
                            key={index}
                            position={item.position}
                            center
                            className="text-blue-500 text-lg font-bold pointer-events-none select-none"
                        >
                            {item.text}
                        </Html>
                    ))}
                </group>
            </Float>
            <pointLight position={[10, 10, 10]} intensity={1} />
            <ambientLight intensity={0.5} />
        </group>
    );
};

export default TechSphere;
