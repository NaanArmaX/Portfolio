import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SASS/SCSS", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 },
        { name: "GraphQL", level: 75 },
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular",
    "Node.js", "Express", "NestJS", "Python", "Django", "FastAPI",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Vercel",
    "Git", "GitHub", "GitLab", "Figma", "Adobe XD", "Tailwind CSS",
    "SASS", "Bootstrap", "Material-UI", "Chakra UI", "Framer Motion",
    "Jest", "Cypress", "Testing Library", "GraphQL", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Habilidades & Tecnologias
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conjunto abrangente de tecnologias e ferramentas que utilizo para criar soluções digitais eficientes e modernas.
          </p>
        </div>

        {/* Skill Categories with Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
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

        {/* Technology Cloud */}
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

        {/* Stats Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-muted-foreground">Projetos Concluídos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    3+
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