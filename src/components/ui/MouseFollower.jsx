import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Ana cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 20,
                    mass: 0.5,
                }}
            />

            {/* Dış halka */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    mass: 0.8,
                }}
            />

            {/* Parıltı efekti */}
            <motion.div
                className="fixed top-0 left-0 w-16 h-16 bg-accent/20 rounded-full pointer-events-none z-40 blur-md"
                animate={{
                    x: mousePosition.x - 32,
                    y: mousePosition.y - 32,
                    scale: isHovering ? 1.5 : 0.5,
                    opacity: isHovering ? 0.5 : 0.2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 1,
                }}
            />
        </>
    );
};

export default MouseFollower;
