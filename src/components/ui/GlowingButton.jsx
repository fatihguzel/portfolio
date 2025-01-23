import { motion } from "framer-motion";

const GlowingButton = ({ children, onClick, className = "" }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group overflow-hidden px-6 py-3 rounded-full ${className}`}
            onClick={onClick}
        >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 opacity-50 group-hover:opacity-70 transition-opacity" />
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent via-purple-500 to-pink-500 blur-lg group-hover:blur-xl transition-all duration-300" />
            <span className="relative text-white font-medium">{children}</span>
        </motion.button>
    );
};

export default GlowingButton;
