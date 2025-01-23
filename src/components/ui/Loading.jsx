import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-primary-dark flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
            >
                <motion.div
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-12 h-12 bg-gradient-to-r from-accent to-purple-500"
                />
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-4 text-accent text-sm font-medium"
                >
                    Loading...
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Loading;
