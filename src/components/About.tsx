import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Coffee, Code2, Gamepad2, Music, BookOpen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbies = [
    { icon: Code2, label: "Coding" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Music, label: "Music" },
    { icon: BookOpen, label: "Reading" },
    { icon: Coffee, label: "Coffee" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ykapil897" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kapil-yadav-836341254/" },
    // { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ];

  return (
    <section id="about" className="py-32 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer crafting scalable solutions and pushing the boundaries of technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass glass-border rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-4 text-gradient">About Me</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer and system architect with a passion for building 
              high-performance, scalable applications. With expertise spanning from backend 
              infrastructure to AI/ML systems, I love tackling complex problems and turning 
              ideas into reality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Hobbies & Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Hobbies */}
            <div className="glass glass-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border hover:border-primary/50 transition-colors"
                  >
                    <hobby.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass glass-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">Connect with Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center justify-center w-12 h-12 bg-secondary rounded-xl border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
