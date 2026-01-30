import { motion } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      {/* Floating orbs - more dynamic */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-primary opacity-15 blur-3xl"
        animate={{ 
          x: [0, 60, -20, 0], 
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-primary opacity-10 blur-3xl"
        animate={{ 
          x: [0, -50, 30, 0], 
          y: [0, 60, -20, 0],
          scale: [1, 1.3, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-gradient-primary opacity-20 blur-2xl"
        animate={{ 
          x: [0, 40, -30, 0], 
          y: [0, -50, 20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full bg-gradient-primary opacity-25 blur-xl"
        animate={{ 
          x: [0, -30, 50, 0], 
          y: [0, 40, -30, 0],
          scale: [1, 1.4, 0.8, 1]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-1/5 w-56 h-56 rounded-full bg-gradient-primary opacity-8 blur-3xl"
        animate={{ 
          x: [0, 70, -40, 0], 
          y: [0, -30, 50, 0],
          scale: [1, 1.1, 1.2, 1]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-muted-foreground text-sm md:text-base tracking-widest uppercase">
            Welcome to my world
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-gradient glow-text">Your Name</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building scalable systems & crafting elegant solutions
        </motion.p>

        {/* Book a 1:1 Session Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10"
        >
          <button
            onClick={() => scrollToSection("contact")}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-primary-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow"
          >
            <Calendar className="w-5 h-5" />
            Book a 1:1 Session
          </button>
        </motion.div>

        {/* Navigation buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="group relative px-8 py-4 bg-gradient-primary text-primary-foreground font-display font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 glow"
          >
            <span className="relative z-10">Understand Him!</span>
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 border border-primary/30 text-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105 border-glow"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border border-muted text-foreground font-display font-semibold rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-secondary hover:scale-105"
          >
            Connect with Him
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
