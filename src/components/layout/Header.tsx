import { useState } from "react";
import { Search, Menu, User, Gamepad2, Trophy, Settings } from "lucide-react";
import { GamingButton } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import riescadeLogo from "@/assets/riescade-logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = [
    { name: "Jogos", href: "/", icon: Gamepad2 },
    { name: "Categorias", href: "/categorias", icon: Menu },
    { name: "Ranking", href: "/ranking", icon: Trophy },
    { name: "Perfil", href: "/perfil", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={riescadeLogo} 
              alt="RIESCADE" 
              className="h-10 w-10 animate-pulse-glow"
            />
            <div className="font-gaming text-xl font-bold text-primary animate-neon-flicker">
              RIESCADE
              <span className="text-sm text-muted-foreground block leading-none">ARCADE</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar jogos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/50 border-border focus:border-primary focus:shadow-glow transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gaming-gray/50 transition-colors duration-200 text-muted-foreground hover:text-primary group"
                >
                  <Icon className="h-4 w-4 group-hover:animate-pulse" />
                  <span className="font-medium">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {/* Login Button */}
            <GamingButton variant="neon" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4 mr-2" />
              Login
            </GamingButton>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <GamingButton variant="gaming" size="sm" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </GamingButton>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar jogos..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background/50"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gaming-gray/50 transition-colors duration-200 text-foreground hover:text-primary group"
                        >
                          <Icon className="h-5 w-5 group-hover:animate-pulse" />
                          <span className="font-medium">{item.name}</span>
                        </a>
                      );
                    })}
                  </nav>

                  {/* Mobile Login */}
                  <GamingButton variant="arcade" className="w-full">
                    <User className="h-4 w-4 mr-2" />
                    Entrar / Cadastrar
                  </GamingButton>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;