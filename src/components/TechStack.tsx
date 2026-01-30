import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, Database, Cloud, Settings, Code, Layers, 
  Workflow, Zap, BookOpen, Calendar
} from "lucide-react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techItems = [
    "Python", "Java", "C/C++", "JavaScript", "TypeScript",
    "Node.js", "FastAPI", "REST APIs", "WebSockets", "Socket.IO", "WebRTC",
    "PostgreSQL", "MongoDB", "Redis", "SQLite",
    "Apache Spark", "Databricks",
    "AWS (EC2, S3, Redshift)", "Azure",
    "Docker", "Airflow", "Git", "CI/CD", "k6", "Streamlit", "Power BI",
    "RabbitMQ", "FAISS", "Vector Stores", "OpenAI", "Groq",
    "many more coming..."
  ];

  const concepts = [
    { icon: Layers, label: "Data Structures & Algorithms" },
    { icon: Code, label: "Object-Oriented Design" },
    { icon: Settings, label: "Backend & API Design" },
    { icon: Cloud, label: "Distributed Systems" },
    { icon: Workflow, label: "Scalable Data Pipelines" },
    { icon: Zap, label: "Caching & Performance Optimization" },
    { icon: Database, label: "ACID Transactions & Relational Databases" },
    { icon: Settings, label: "Async Processing & Idempotency" },
    { icon: Layers, label: "System Design" },
    { icon: Brain, label: "Generative AI" },
    { icon: Workflow, label: "RAG Pipelines" },
    { icon: Brain, label: "LLM Systems" },
  ];

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools, Frameworks & Platforms I work with
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mb-20">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="overflow-hidden">
          <motion.div 
            className="marquee flex gap-4 py-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[...techItems, ...techItems].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-5 py-3 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors whitespace-nowrap"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Knowledge & Concepts */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Knowledge & <span className="text-gradient">Concepts</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
              className="group glass glass-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300"
            >
              <concept.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{concept.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <span className="text-muted-foreground">...and many more coming!</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow"
          >
            <Calendar className="w-4 h-4" />
            Book a 1:1 Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
