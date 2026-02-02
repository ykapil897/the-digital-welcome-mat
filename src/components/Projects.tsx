import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Chess Video App",
    description: "A real-time chess app with server-validated gameplay and live video/audio support.",
    tags: ["React", "Node.js", "Socket.IO", "WebRTC", "Docker"],
    github: "https://github.com/ykapil897/chess-video-app",
    live: "https://drive.google.com/file/d/1dBZXKkxOf7_g8z4HOnu-YQWZCDmVY9R7/view?usp=sharing",
  },
  {
    title: "Order Inventory System",
    description: "Built a strongly consistent, scalable order system with idempotent APIs and load-tested performance.",
    tags: ["PostgreSQL", "Redis", "Node.js", "RabbitMQ", "Docker"],
    github: "https://github.com/ykapil897/order-inventory-system",
    live: "https://drive.google.com/file/d/1EWforEGEv-19Z5GNC8-jKlxlQ6FxjckS/view",
  },
  {
    title: "Advertisement Response Analysis",
    description: "Built a Dockerized, scalable analytics system with real-time pipelines, optimized ML targeting, and reliable low-latency serving.",
    tags: ["FastAPI", "React", "MongoDB", "Docker", "Python", "Scikit-learn"],
    github: "https://github.com/ykapil897/Advertisement-Response-Analysis",
    live: "#",
  },
  {
    title: "Microservices Architecture",
    description: "Event-driven microservices with RabbitMQ, Docker, and Kubernetes orchestration.",
    tags: ["Docker", "Kubernetes", "RabbitMQ", "Go"],
    github: "https://github.com",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with interactive visualizations using Power BI and Streamlit.",
    tags: ["Power BI", "Streamlit", "Python", "MongoDB"],
    github: "https://github.com",
    live: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent work and experiments
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scrolling container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 snap-start"
              >
                <div className="glass glass-border rounded-2xl p-6 h-full flex flex-col hover:border-primary/50 transition-all duration-300 group">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/30 hover:bg-primary/20 transition-colors text-sm text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Video
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
