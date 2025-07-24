import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xjkowvgo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    });

    if (response.ok) {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entrarei em contato em breve.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error("Erro ao enviar o formulário");
    }
  } catch (error) {
    console.error('Erro:', error);
    toast({
      title: "Erro ao enviar mensagem",
      description: "Por favor, tente novamente ou envie um e-mail direto.",
      variant: "destructive"
    });
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Tainan56.tss@gmail.com",
      href: "mailto:Tainan56.tss@gmail.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (71) 99917-9678",
      href: "tel:+5571999179678"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Bahia, Brasil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/NaanArmaX",
      color: "hover:text-gray-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tain%C3%A3-dos-santos-silva/",
      color: "hover:text-blue-600"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:Tainan56.tss@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tem um projeto em mente? Gostaria de colaborar? Ou apenas quer bater um papo sobre tecnologia? 
            Entre em contato comigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" variant="gradient" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 group">
                        <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{info.title}</h4>
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Conecte-se Comigo
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/80 backdrop-blur-sm rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 hover:scale-110 transition-all duration-300"
                        title={social.name}
                      >
                        <Icon className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Disponibilidade
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Disponível para novos projetos</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Resposta típica:</strong> 24-48 horas
                  </div>
                  <div>
                    <strong className="text-foreground">Fuso horário:</strong> GMT-3 (Brasília)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;