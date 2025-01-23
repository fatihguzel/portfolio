import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-black/50 backdrop-blur-md py-4 shadow-lg shadow-black/10"
                    : "bg-transparent py-6"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    >
                        Fatih Güzel
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLinks />
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: 45, y: 8 }
                                        : { rotate: 0, y: 0 }
                                }
                                className="w-full h-0.5 bg-white origin-left transition-all"
                            />
                            <motion.span
                                animate={
                                    isOpen ? { opacity: 0 } : { opacity: 1 }
                                }
                                className="w-full h-0.5 bg-white transition-all"
                            />
                            <motion.span
                                animate={
                                    isOpen
                                        ? { rotate: -45, y: -8 }
                                        : { rotate: 0, y: 0 }
                                }
                                className="w-full h-0.5 bg-white origin-left transition-all"
                            />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-4 space-y-4">
                                <NavLinks mobile setIsOpen={setIsOpen} />
                                <div className="pt-4 border-t border-white/10 flex justify-center">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

const NavLinks = ({ mobile, setIsOpen }) => {
    const links = [
        { href: "#home", text: "Ana Sayfa" },
        { href: "#about", text: "Hakkımda" },
        { href: "#projects", text: "Projeler" },
        { href: "#contact", text: "İletişim" },
    ];

    return links.map((link, index) => (
        <motion.a
            key={link.href}
            href={link.href}
            initial={mobile ? { opacity: 0, x: -10 } : false}
            animate={mobile ? { opacity: 1, x: 0 } : false}
            transition={{ delay: index * 0.1 }}
            className={`relative group ${
                mobile
                    ? "block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    : "text-gray-300 hover:text-white transition-colors"
            }`}
            onClick={(e) => {
                e.preventDefault();
                document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                if (setIsOpen) setIsOpen(false);
            }}
        >
            {link.text}
            {!mobile && (
                <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.a>
    ));
};

export default Navbar;
