import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NetworkAnimation = () => {
    const pointsRef = useRef();
    const linesRef = useRef();

    // Noktaları oluştur
    const { points, connections } = useMemo(() => {
        const points = [];
        const connections = [];
        const pointCount = 100; // Daha fazla nokta

        // Rastgele noktalar oluştur - daha geniş alan
        for (let i = 0; i < pointCount; i++) {
            points.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 20, // Daha geniş x
                    (Math.random() - 0.5) * 20, // Daha geniş y
                    (Math.random() - 0.5) * 10 // Daha geniş z
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.01, // Daha yavaş hareket
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.005
                ),
            });
        }

        // Daha uzun bağlantılar
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const distance = points[i].position.distanceTo(
                    points[j].position
                );
                if (distance < 8) {
                    // Daha uzun bağlantılar
                    connections.push({
                        start: i,
                        end: j,
                        distance: distance,
                    });
                }
            }
        }

        return { points, connections };
    }, []);

    // Animasyon
    useFrame(() => {
        const positions = pointsRef.current.geometry.attributes.position.array;
        const linePositions =
            linesRef.current.geometry.attributes.position.array;
        const colors = linesRef.current.geometry.attributes.color.array;

        // Noktaları hareket ettir
        points.forEach((point, i) => {
            point.position.add(point.velocity);

            // Sınırları kontrol et ve yön değiştir
            ["x", "y", "z"].forEach((axis) => {
                if (Math.abs(point.position[axis]) > 10) {
                    point.velocity[axis] *= -1;
                }
            });

            // Pozisyonları güncelle
            positions[i * 3] = point.position.x;
            positions[i * 3 + 1] = point.position.y;
            positions[i * 3 + 2] = point.position.z;
        });

        // Bağlantıları güncelle
        connections.forEach((connection, i) => {
            const start = points[connection.start].position;
            const end = points[connection.end].position;
            const distance = start.distanceTo(end);
            const opacity = 1 - distance / 8;

            // Hat pozisyonlarını güncelle
            linePositions[i * 6] = start.x;
            linePositions[i * 6 + 1] = start.y;
            linePositions[i * 6 + 2] = start.z;
            linePositions[i * 6 + 3] = end.x;
            linePositions[i * 6 + 4] = end.y;
            linePositions[i * 6 + 5] = end.z;

            // Renk ve opaklığı güncelle
            const color = new THREE.Color(0x3b82f6).multiplyScalar(0.5); // Daha soft renk
            colors[i * 6] = color.r;
            colors[i * 6 + 1] = color.g;
            colors[i * 6 + 2] = color.b;
            colors[i * 6 + 3] = color.r;
            colors[i * 6 + 4] = color.g;
            colors[i * 6 + 5] = color.b;
        });

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        linesRef.current.geometry.attributes.position.needsUpdate = true;
        linesRef.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <group>
            {/* Noktalar */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={points.length}
                        array={new Float32Array(points.length * 3)}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05} // Daha küçük noktalar
                    color="#3b82f6"
                    transparent
                    opacity={0.3} // Daha transparan
                />
            </points>

            {/* Bağlantı çizgileri */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connections.length * 2}
                        array={new Float32Array(connections.length * 6)}
                        itemSize={3}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        count={connections.length * 2}
                        array={new Float32Array(connections.length * 6)}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial vertexColors transparent opacity={0.1} />{" "}
                {/* Daha transparan çizgiler */}
            </lineSegments>
        </group>
    );
};

export default NetworkAnimation;
