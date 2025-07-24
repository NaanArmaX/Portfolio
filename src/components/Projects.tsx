import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Backend Microservices",
      description:
        "Conjunto de microservices backend incluindo Auth, Payments e Resource. Sistema de autenticação JWT com PostgreSQL, Redis e Docker para orquestração dos containers.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "JWT"],
      github: "https://github.com/NaanArmaX/backend-microservices",
      demo: "",
      featured: true,
    },
    {
      id: 2,
      title: "PokeApp - Ionic & Angular",
      description:
        "Aplicativo mobile com Ionic e Angular para exibir informações detalhadas de Pokémons usando a PokeAPI. Uso de componentes standalone, Observables e navegação via Router.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      technologies: ["Ionic", "Angular", "TypeScript", "RxJS"],
      github: "https://github.com/NaanArmaX/pokeapp-ionic-angular",
      demo: "",
      featured: false,
    },
    {
      id: 3,
      title: "TigreClub",
      description:
        "Site oficial do TigreClub, desenvolvido para promover partidas online de domino apostado.",
      image: "https://tigreclub.com/assets/images/banner_home1.png",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "", // sem repo público
      demo: "https://tigreclub.com/",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus trabalhos mais recentes.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Projetos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-card transition-all duration-300 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      Destaque
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Visitar
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Outros Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-card hover:scale-105 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-muted">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild className="p-2 h-8 w-8">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild className="p-2 h-8 w-8">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
