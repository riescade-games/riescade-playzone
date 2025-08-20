import { Play, Zap, Users, Trophy } from "lucide-react";
import { GamingButton } from "@/components/ui/button-variants";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Play, label: "Jogos", value: "500+" },
    { icon: Users, label: "Jogadores", value: "10K+" },
    { icon: Zap, label: "Partidas Hoje", value: "2.5K+" },
    { icon: Trophy, label: "Conquistas", value: "50+" },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner}
          alt="RIESCADE Arcade Gaming"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-neon-cyan rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-accent rounded-full animate-bounce opacity-30" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-neon-green rounded-full animate-ping opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-gaming font-black mb-6 animate-fade-in">
            <span className="text-primary animate-neon-flicker">RIESCADE</span>
            <br />
            <span className="text-foreground">ARCADE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up font-medium">
            O portal definitivo de jogos online! Centenas de jogos, diversão infinita 
            e uma comunidade apaixonada por gaming.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-bounce-in">
            <GamingButton variant="hero" size="xl" className="animate-pulse-glow">
              <Play className="h-6 w-6 mr-3" />
              JOGAR AGORA
            </GamingButton>
            <GamingButton variant="neon" size="xl">
              <Trophy className="h-6 w-6 mr-3" />
              VER RANKING
            </GamingButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:bg-card/30 transition-all duration-300 hover:shadow-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-pulse" />
                  <div className="font-gaming text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;