import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SpaceScene from "../3d/SpaceScene";
import CodeAnimation from "../3d/CodeAnimation";
import TypeWriter from "../ui/TypeWriter";

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-20">
            {/* Galaksi Arka Plan */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                        <SpaceScene />
                    </Suspense>
                </Canvas>
            </div>

            {/* İçerik */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
                    {/* Sol taraf - İçerik */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="mb-6">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl mb-4"
                            >
                                👋 Hey there! I'm
                            </motion.h2>
                            <TypeWriter
                                words={[
                                    "Fatih Güzel",
                                    "Full Stack Developer",
                                    "Web3 Enthusiast",
                                    "Problem Solver",
                                ]}
                                className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                            />
                        </div>
                        <div className="space-y-4 mb-8">
                            <p className="text-xl text-gray-300">
                                Full Stack Developer & Web3 Enthusiast
                            </p>
                            <p className="text-gray-400 max-w-lg">
                                Passionate about innovative technologies and
                                continuous learning. Currently exploring Web3,
                                GraphQL, and advanced JavaScript ecosystems.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document
                                        .querySelector("#projects")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="bg-accent hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors"
                            >
                                View Projects
                            </a>
                            <a
                                href="https://www.linkedin.com/in/fatih-güzel-712215224/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full transition-colors flex items-center gap-2"
                            >
                                <span>Connect</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>

                    {/* Sağ taraf - Kod Animasyonu */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-[400px]"
                    >
                        <CodeAnimation />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
