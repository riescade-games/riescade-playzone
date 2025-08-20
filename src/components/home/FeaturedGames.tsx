import { Flame, Star, Clock, TrendingUp } from "lucide-react";
import GameCard from "./GameCard";
import gamePuzzle from "@/assets/game-puzzle.jpg";
import gameRacing from "@/assets/game-racing.jpg";
import gameAdventure from "@/assets/game-adventure.jpg";
import gameRetro from "@/assets/game-retro.jpg";

const FeaturedGames = () => {
  const featuredGames = [
    {
      id: "1",
      title: "Neon Puzzle Master",
      thumbnail: gamePuzzle,
      category: "Puzzle",
      rating: 4.8,
      playCount: 15420,
      duration: "15 min",
      isHot: true,
      isNew: false,
    },
    {
      id: "2", 
      title: "Cyber Racing Champions",
      thumbnail: gameRacing,
      category: "Racing",
      rating: 4.9,
      playCount: 23100,
      duration: "20 min",
      isHot: true,
      isNew: true,
    },
    {
      id: "3",
      title: "Epic Quest Adventures",
      thumbnail: gameAdventure,
      category: "Adventure", 
      rating: 4.7,
      playCount: 31250,
      duration: "45 min",
      isHot: false,
      isNew: false,
    },
    {
      id: "4",
      title: "Retro Space Shooter",
      thumbnail: gameRetro,
      category: "Retro",
      rating: 4.6,
      playCount: 18900,
      duration: "10 min",
      isHot: false,
      isNew: true,
    }
  ];

  const popularGames = [
    {
      id: "5",
      title: "Mind Bender Pro",
      thumbnail: gamePuzzle,
      category: "Puzzle",
      rating: 4.9,
      playCount: 45600,
      duration: "25 min",
    },
    {
      id: "6",
      title: "Speed Demon Rally",
      thumbnail: gameRacing,
      category: "Racing", 
      rating: 4.8,
      playCount: 38200,
      duration: "18 min",
    },
    {
      id: "7",
      title: "Mystic Realms",
      thumbnail: gameAdventure,
      category: "Adventure",
      rating: 4.7,
      playCount: 52100,
      duration: "60 min",
    },
    {
      id: "8",
      title: "Pixel Warriors",
      thumbnail: gameRetro,
      category: "Retro",
      rating: 4.5,
      playCount: 28700,
      duration: "12 min",
    }
  ];

  const gamesSections = [
    {
      title: "JOGOS EM DESTAQUE",
      subtitle: "Os jogos mais quentes do momento",
      icon: Flame,
      iconColor: "text-neon-orange",
      games: featuredGames,
    },
    {
      title: "MAIS POPULARES",
      subtitle: "Favoritos da comunidade gamer",
      icon: TrendingUp,
      iconColor: "text-primary",
      games: popularGames,
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {gamesSections.map((section, sectionIndex) => {
          const SectionIcon = section.icon;
          return (
            <div key={section.title} className={sectionIndex > 0 ? "mt-20" : ""}>
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <SectionIcon className={`h-8 w-8 ${section.iconColor} animate-pulse mr-3`} />
                  <h2 className="text-4xl md:text-5xl font-gaming font-bold text-foreground">
                    <span className={section.iconColor.replace('text-', 'text-')}>{section.title.split(' ')[0]}</span>
                    {section.title.includes(' ') && (
                      <span className="text-foreground"> {section.title.split(' ').slice(1).join(' ')}</span>
                    )}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {section.subtitle}
                </p>
              </div>

              {/* Games Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.games.map((game, index) => (
                  <div 
                    key={game.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <GameCard {...game} />
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div className="text-center mt-12">
                <button className="inline-flex items-center px-8 py-4 bg-card border-2 border-border hover:border-primary text-foreground hover:text-primary font-gaming font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow group">
                  <Star className="h-5 w-5 mr-3 group-hover:animate-spin" />
                  VER MAIS JOGOS
                  <Clock className="h-5 w-5 ml-3 group-hover:animate-pulse" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedGames;