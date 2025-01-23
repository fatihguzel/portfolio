import { useRef } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeAnimation = () => {
    const code = `// Tech Stack Overview
const skills = {
  lang: ['JavaScript', 'TypeScript', 'Python'],
  front: {
    core: ['React', 'Next.js'],
    style: ['Tailwind', 'MUI']
  },
  back: ['Node.js', 'Flask', 'GraphQL'],
  web3: ['Web3.js', 'Socket.io'],
  tools: ['Git', 'MongoDB', 'Redux']
};

// Always learning...
while (true) {
  exploreNewTech();
  buildInnovative();
  stayPassionate();
}`;

    // Özel stil ayarları
    const customStyle = {
        background: "transparent",
        padding: "1.2rem",
        margin: 0,
        borderRadius: "0.5rem",
        fontSize: "0.8rem",
        lineHeight: "1.4",
        height: "100%",
    };

    return (
        <div className="font-mono h-full flex items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="bg-black/30 backdrop-blur-sm rounded-lg w-full h-[400px]"
            >
                <SyntaxHighlighter
                    language="javascript"
                    style={atomDark}
                    customStyle={customStyle}
                    showLineNumbers
                    wrapLines
                    className="h-full"
                >
                    {code}
                </SyntaxHighlighter>

                {/* Yanıp sönen imleç */}
                <motion.div
                    animate={{
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="inline-block w-1.5 h-4 bg-accent -mt-[380px] ml-4 relative"
                />
            </motion.div>
        </div>
    );
};

export default CodeAnimation;
