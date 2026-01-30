import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> and lots of coffee
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
