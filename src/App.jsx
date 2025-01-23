import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Loading from "./components/ui/Loading";
import NetworkAnimation from "./components/3d/NetworkAnimation";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <ThemeProvider>
            <Router>
                <div className="relative min-h-screen bg-primary-dark text-white overflow-hidden">
                    <div className="fixed inset-0 z-0">
                        <div className="animated-gradient" />
                        <div className="noise-overlay" />
                        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
                            <Suspense fallback={null}>
                                <NetworkAnimation />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="relative z-10">
                        <Navbar />
                        <Hero />
                        <main className="container mx-auto px-4">
                            <About />
                            <Projects />
                            <Contact />
                            {/* Diğer bölümler gelecek */}
                        </main>
                        <Footer />
                        <ScrollToTop />
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
