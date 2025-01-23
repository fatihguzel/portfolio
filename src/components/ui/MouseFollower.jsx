import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseFollower = () => {
    const [clicks, setClicks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newClick = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now(),
            };
            setClicks((prev) => [...prev, newClick]);

            // Her bir baloncuğu 1 saniye sonra kaldır
            setTimeout(() => {
                setClicks((prev) =>
                    prev.filter((click) => click.id !== newClick.id)
                );
            }, 1000);
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <AnimatePresence>
            {clicks.map((click) => (
                <motion.div
                    key={click.id}
                    initial={{
                        opacity: 0.8,
                        scale: 0.2,
                        x: click.x - 8,
                        y: click.y - 8,
                    }}
                    animate={{
                        opacity: 0,
                        scale: 1.5,
                        y: click.y - 50,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="fixed pointer-events-none z-50"
                >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 blur-[2px]" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full border border-white/50 animate-ping" />
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default MouseFollower;
