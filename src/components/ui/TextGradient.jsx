import { motion } from "framer-motion";

const TextGradient = ({ children, className = "" }) => {
    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-transparent bg-clip-text ${className}`}
        >
            {children}
        </motion.span>
    );
};

export default TextGradient;
