import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const SpaceScene = () => {
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        groupRef.current.rotation.y = time * 0.05;
    });

    return (
        <group ref={groupRef}>
            <Stars
                radius={100}
                depth={50}
                count={3000}
                factor={4}
                saturation={0.5}
                fade
                speed={0.5}
            />
            <ambientLight intensity={0.3} />
        </group>
    );
};

export default SpaceScene;
