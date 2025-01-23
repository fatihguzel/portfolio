import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import TechSphere from "../3d/TechSphere";

const About = () => {
    const skills = [
        {
            category: "Frontend",
            items: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Redux",
                "React Query",
            ],
        },
        {
            category: "Backend",
            items: ["Node.js", "Flask", "Nest.js"],
        },
        {
            category: "Web3",
            items: ["Web3.js", "Socket.io"],
        },
        {
            category: "Diğer",
            items: ["Git", "GitHub", "GitLab", "MongoDB"],
        },
    ];

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Hakkımda
                    </h2>
                    <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
                        Full Stack Developer olarak cutting-edge teknolojilere
                        olan tutkumla Web3, GraphQL ve ileri düzey JavaScript
                        ekosistemlerini keşfediyorum.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* 3D Model */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-[400px] bg-secondary-light/5 dark:bg-secondary-dark/5 rounded-xl overflow-hidden w-full"
                    >
                        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                            <Suspense fallback={null}>
                                <TechSphere />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                />
                            </Suspense>
                        </Canvas>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                    >
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 py-6 px-12 rounded-xl hover:bg-gray-900/70 transition-colors"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-start underline">
                                    {skillGroup.category}
                                </h3>
                                <ul className="grid grid-cols-1 gap-2 items-center">
                                    {skillGroup.items.map(
                                        (skill, skillIndex) => (
                                            <li
                                                key={skillIndex}
                                                className="text-gray-400 list-disc"
                                            >
                                                {skill}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
