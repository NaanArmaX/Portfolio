import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Experiência em React, Node.js, TypeScript e tecnologias modernas"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design com foco em experiência do usuário e interfaces elegantes"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Otimização de aplicações para máxima performance e velocidade"
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe, metodologias ágeis e comunicação eficaz"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sou um desenvolvedor apaixonado por tecnologia, sempre buscando aprender e criar soluções inovadoras. 
            Com experiência em desenvolvimento full stack, gosto de transformar ideias em realidade digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card hover:scale-105 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    Minha Jornada
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Começei minha jornada no desenvolvimento há alguns anos e desde então tenho me dedicado 
                    a aperfeiçoar minhas habilidades e acompanhar as últimas tendências da tecnologia.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Gosto de trabalhar em projetos desafiadores que me permitam crescer profissionalmente 
                    e contribuir para soluções que fazem a diferença.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Frontend</span>
                    <span className="text-primary font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Backend</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Design</span>
                    <span className="text-primary font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;