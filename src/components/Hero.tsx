import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 relative">
           
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-44 h-44 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl -z-10"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                Ola, eu sou
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Desenvolvedor
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis e soluções inovadoras
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                          <a
              href="/Tainã_FullStack_2025.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-md hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://github.com/NaanArmaX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tain%C3%A3-dos-santos-silva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:tainan56.tss@gmail.com"
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;