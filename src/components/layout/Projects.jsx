import { motion } from "framer-motion";

const Projects = () => {
    const projects = [
        {
            title: "MetaMask NFT Marketplace",
            description:
                "MetaMask ile NFT işlemlerinin gerçekleştirildiği blockchain tabanlı bir marketplace. React ve Web3 teknolojileri kullanılarak geliştirildi. Kullanıcılar sanal para birimi ile NFT alım-satım işlemleri yapabiliyor.",
            tech: ["React", "Web3.js", "MetaMask", "Blockchain", "Redux"],
            github: null,
            live: "https://app.digard.io/dashboard",
        },
        {
            title: "AI Camera Analytics",
            description:
                "Yapay zeka destekli kameralardan gelen verilerin işlenip analiz edildiği bir yönetim paneli. Nextjs ve Redux kullanılarak geliştirildi. WebSocket ile gerçek zamanlı veri akışı sağlandı.",
            tech: ["Next.js", "Redux", "WebSocket", "Firebase", "AI"],
            github: null,
            live: "https://play.google.com/store/apps/details?id=com.eyediusone",
        },
        {
            title: "Real Estate Analytics",
            description:
                "Emlak verilerinin analiz edilip raporlandığı kapsamlı bir dashboard. Şehir suç oranı, trafik yoğunluğu gibi parametrelerin görselleştirilmesi ve premium raporlama özellikleri içeriyor.",
            tech: [
                "React",
                "Node.js",
                "Data Visualization",
                "Payment Integration",
            ],
            github: null,
            live: null,
        },
        {
            title: "Enterprise ERP System",
            description:
                "Büyük ölçekli bir şirket için geliştirilen ERP sistemi. 15'ten fazla modül entegrasyonu, iş süreçleri yönetimi ve test süreçlerinin koordinasyonu sağlandı.",
            tech: ["React", "NestJS", "TypeScript", "MongoDB"],
            github: null,
            live: null,
        },
        {
            title: "Mushroom Detection API",
            description:
                "Yapay zeka destekli mantar türü tespit API'si. TensorFlow ve Flask kullanılarak geliştirildi. %92 başarı oranı ile mantarların türünü ve zehirli olup olmadığını tespit edebiliyor.",
            tech: ["Python", "TensorFlow", "Flask", "AI/ML", "REST API"],
            github: "https://github.com/fatihguzel/mushroom-detection-api",
            live: null,
        },
        {
            title: "Trendyol Price Tracker",
            description:
                "Trendyol üzerindeki ürünlerin fiyat takibini yapan Ruby tabanlı bir uygulama. Fiyat değişikliklerini otomatik olarak takip edip bildirim gönderiyor.",
            tech: ["Ruby", "Web Scraping", "Automation", "API"],
            github: "https://github.com/fatihguzel/trendyol-price-tracker",
            live: null,
        },
        {
            title: "Node Package Cleaner",
            description:
                "Node.js projelerinde kullanılmayan paketleri tespit edip temizleyen bir araç. Proje boyutunu optimize etmeye yardımcı oluyor.",
            tech: ["Node.js", "CLI", "npm", "JavaScript"],
            github: "https://github.com/fatihguzel/node-package-cleaner",
            live: null,
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                        Projelerim
                    </h2>
                    <p className="text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
                        Web3, AI ve otomasyona odaklanan çeşitli projeler
                        geliştirdim
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 },
            }}
            className="group relative bg-glass backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
        >
            {!project.github && (
                <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                        <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                        </svg>
                        Private Project
                    </span>
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs bg-white/5 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-white/5">
                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            GitHub
                        </a>
                    ) : (
                        <span className="text-sm text-gray-500 flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            Company Project
                        </span>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-accent transition-colors flex items-center gap-2"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
