import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypeWriter = ({ words, className }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeoutId;

        const animateText = () => {
            const currentWord = words[currentWordIndex];

            if (!isDeleting) {
                if (currentText !== currentWord) {
                    timeoutId = setTimeout(() => {
                        setCurrentText(
                            currentWord.substring(0, currentText.length + 1)
                        );
                    }, 150);
                } else {
                    timeoutId = setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500);
                }
            } else {
                if (currentText === "") {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                } else {
                    timeoutId = setTimeout(() => {
                        setCurrentText(
                            currentWord.substring(0, currentText.length - 1)
                        );
                    }, 100);
                }
            }
        };

        animateText();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <div className={className}>
            <span className="inline-block">{currentText}</span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle"
            />
        </div>
    );
};

export default TypeWriter;
