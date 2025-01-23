import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center"
            >
                <div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            animate={{
                                y: ["0%", "-50%", "0%"],
                            }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                            className="w-3 h-3 bg-blue-600 rounded-full"
                        />
                    ))}
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-gray-400"
                >
                    Yükleniyor...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Loading;
