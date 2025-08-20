import { 
  Puzzle, 
  Car, 
  Sword, 
  Zap, 
  Users, 
  Target, 
  Gamepad2, 
  Brain,
  ChevronRight 
} from "lucide-react";

const GameCategories = () => {
  const categories = [
    {
      name: "Puzzle",
      icon: Puzzle,
      count: 125,
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10 hover:bg-neon-cyan/20",
      borderColor: "border-neon-cyan/30 hover:border-neon-cyan",
    },
    {
      name: "Racing",
      icon: Car,
      count: 87,
      color: "text-neon-orange",
      bgColor: "bg-neon-orange/10 hover:bg-neon-orange/20",
      borderColor: "border-neon-orange/30 hover:border-neon-orange",
    },
    {
      name: "Adventure",
      icon: Sword,
      count: 156,
      color: "text-primary",
      bgColor: "bg-primary/10 hover:bg-primary/20",
      borderColor: "border-primary/30 hover:border-primary",
    },
    {
      name: "Arcade",
      icon: Zap,
      count: 203,
      color: "text-neon-green",
      bgColor: "bg-neon-green/10 hover:bg-neon-green/20",
      borderColor: "border-neon-green/30 hover:border-neon-green",
    },
    {
      name: "Multiplayer",
      icon: Users,
      count: 89,
      color: "text-accent",
      bgColor: "bg-accent/10 hover:bg-accent/20",
      borderColor: "border-accent/30 hover:border-accent",
    },
    {
      name: "Action",
      icon: Target,
      count: 134,
      color: "text-destructive",
      bgColor: "bg-destructive/10 hover:bg-destructive/20",
      borderColor: "border-destructive/30 hover:border-destructive",
    },
    {
      name: "Retro",
      icon: Gamepad2,
      count: 78,
      color: "text-foreground",
      bgColor: "bg-foreground/10 hover:bg-foreground/20",
      borderColor: "border-foreground/30 hover:border-foreground",
    },
    {
      name: "Strategy",
      icon: Brain,
      count: 92,
      color: "text-muted-foreground",
      bgColor: "bg-muted-foreground/10 hover:bg-muted-foreground/20",
      borderColor: "border-muted-foreground/30 hover:border-muted-foreground",
    },
  ];

  return (
    <section className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-gaming font-bold text-foreground mb-4">
            <span className="text-primary animate-neon-flicker">CATEGORIAS</span> DE JOGOS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa vasta coleção de jogos organizados por categoria. 
            Encontre exatamente o tipo de diversão que você procura!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className={`
                  group relative p-6 rounded-xl border-2 cursor-pointer
                  transition-all duration-300 hover:scale-105 hover:shadow-glow
                  ${category.bgColor} ${category.borderColor}
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`
                    p-4 rounded-full transition-all duration-300
                    ${category.bgColor.replace('10', '20').replace('20', '30')}
                    group-hover:scale-110 group-hover:animate-pulse
                  `}>
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-gaming font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.count} jogos
                  </p>
                  
                  {/* View More Button */}
                  <div className="flex items-center justify-center text-xs text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    <span className="font-medium">Ver jogos</span>
                    <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground font-gaming font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-neon">
            <Gamepad2 className="h-5 w-5 mr-3" />
            VER TODAS AS CATEGORIAS
            <ChevronRight className="h-5 w-5 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;