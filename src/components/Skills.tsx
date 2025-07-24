import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "Laravel", level: 80 },       
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "FastAPI", level: 70 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "Infraestrutura & DevOps",
      skills: [
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 70 },
        { name: "Linux", level: 50 },
      ],
    },
    {
      title: "Ferramentas & Outros",
      skills: [
        { name: "Git", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Jest", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
  ];

  const technologies = [
    "Node.js", "Express", "NestJS", "Laravel",       
    "Python", "Django", "FastAPI",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
    "Linux", "Git", "Postman", "Jest", "GraphQL", "REST APIs", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tecnologias e ferramentas que utilizo para desenvolver sistemas backend robustos, escaláveis e seguros.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary/50 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Tecnologias que Trabalho
          </h3>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

       
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-muted-foreground">Projetos Concluídos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-muted-foreground">Tecnologias</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
