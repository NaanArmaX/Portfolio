import { Card, CardContent } from "@/components/ui/card";
import { Server, Database, ShieldCheck, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Server,
      title: "Desenvolvimento Backend",
      description: "Experiência com Node.js, Express, Laravel,APIs RESTful e microsserviços"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Conhecimento em bancos relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Redis)"
    },
    {
      icon: ShieldCheck,
      title: "Segurança",
      description: "Implementação de autenticação, autorização e boas práticas de segurança"
    },
    {
      icon: Cpu,
      title: "Escalabilidade",
      description: "Desenvolvimento de sistemas escaláveis e otimizados para alta performance"
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
            Sou um desenvolvedor backend dedicado a construir APIs robustas, escaláveis e seguras, focado em entregar soluções que atendam às necessidades do negócio com qualidade e eficiência.
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
                    Iniciei minha carreira focado no desenvolvimento backend e desde então venho aprimorando minhas habilidades em construção de APIs, integração com bancos de dados e segurança da informação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Gosto de trabalhar em projetos complexos que exigem alta performance e escalabilidade, sempre buscando soluções eficientes e bem arquitetadas.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Node.js/Laravel</span>
                    <span className="text-primary font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Bancos de Dados</span>
                    <span className="text-primary font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Segurança</span>
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
