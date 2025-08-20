import { Play, Heart, Eye, Clock } from "lucide-react";
import { GamingButton } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  playCount: number;
  duration?: string;
  isHot?: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
}

const GameCard = ({
  title,
  thumbnail,
  category,
  rating,
  playCount,
  duration,
  isHot,
  isNew,
  isFavorite = false
}: GameCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105">
      {/* Thumbnail */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <GamingButton variant="arcade" size="lg" className="animate-bounce-in">
            <Play className="h-6 w-6 mr-2" />
            JOGAR
          </GamingButton>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {isHot && (
            <Badge className="bg-neon-orange text-white font-gaming text-xs animate-pulse">
              🔥 HOT
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-neon-green text-white font-gaming text-xs animate-pulse">
              ✨ NOVO
            </Badge>
          )}
        </div>

        {/* Favorite Icon */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-primary/20 transition-colors duration-200">
          <Heart 
            className={`h-4 w-4 transition-colors duration-200 ${
              isFavorite ? 'text-primary fill-primary' : 'text-white hover:text-primary'
            }`}
          />
        </button>

        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
            <Clock className="h-3 w-3 text-white mr-1" />
            <span className="text-xs text-white font-medium">{duration}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs font-gaming">
            {category}
          </Badge>
          <div className="flex items-center text-muted-foreground text-xs">
            <Eye className="h-3 w-3 mr-1" />
            {playCount.toLocaleString('pt-BR')}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-gaming font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(rating) 
                    ? 'text-neon-orange' 
                    : 'text-muted-foreground'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-2">
            ({rating.toFixed(1)})
          </span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default GameCard;