import { Gamepad2, Github, Twitter, Instagram, Mail } from "lucide-react";
import riescadeLogo from "@/assets/riescade-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    gaming: [
      { name: "Jogos Populares", href: "/populares" },
      { name: "Novos Lançamentos", href: "/novos" },
      { name: "Categorias", href: "/categorias" },
      { name: "Ranking", href: "/ranking" },
    ],
    account: [
      { name: "Minha Conta", href: "/perfil" },
      { name: "Favoritos", href: "/favoritos" },
      { name: "Conquistas", href: "/conquistas" },
      { name: "Histórico", href: "/historico" },
    ],
    support: [
      { name: "Central de Ajuda", href: "/ajuda" },
      { name: "Contato", href: "/contato" },
      { name: "Termos de Uso", href: "/termos" },
      { name: "Privacidade", href: "/privacidade" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Email", icon: Mail, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={riescadeLogo} 
                alt="RIESCADE" 
                className="h-12 w-12 animate-pulse-glow"
              />
              <div>
                <div className="font-gaming text-2xl font-bold text-primary animate-neon-flicker">
                  RIESCADE
                </div>
                <div className="text-sm text-muted-foreground font-gaming">
                  ARCADE
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              O melhor portal de jogos online. Diversão garantida com centenas de jogos 
              em diversas categorias. Jogue agora e faça parte da comunidade gamer!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-gaming-gray/50 hover:bg-primary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:animate-pulse" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Gaming Links */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4 flex items-center">
              <Gamepad2 className="h-4 w-4 mr-2 text-primary" />
              Gaming
            </h3>
            <ul className="space-y-3">
              {footerLinks.gaming.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">
              Conta
            </h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-gaming font-semibold text-foreground mb-4">
              Suporte
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} RIESCADE Arcade. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/termos" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="/privacidade" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;