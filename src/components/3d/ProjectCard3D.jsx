import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const ProjectCard3D = ({ project, index }) => {
    const groupRef = useRef();

    useFrame((state) => {
        // Çok hafif bir hover efekti
        const y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.02;
        groupRef.current.position.y = y;
    });

    return (
        <group ref={groupRef}>
            {/* Kart İçeriği */}
            <Html transform>
                <div className="w-[300px] bg-gradient-to-br from-secondary-dark/80 to-secondary-dark/60 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-lg transition-all duration-300 hover:border-accent/30">
                    <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="bg-white/10 text-xs text-white px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/80 hover:text-accent transition-colors"
                            >
                                GitHub
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/80 hover:text-accent transition-colors"
                            >
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </Html>

            {/* Ambient Light */}
            <ambientLight intensity={0.5} />
        </group>
    );
};

export default ProjectCard3D;
