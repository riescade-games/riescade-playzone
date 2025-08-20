import { Button } from "./button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

// Gaming-specific button variants using design system
const gamingButtonVariants = cva(
  "relative overflow-hidden font-gaming font-semibold transition-all duration-300 border-2",
  {
    variants: {
      variant: {
        arcade: [
          "bg-gradient-primary text-primary-foreground",
          "border-primary hover:border-primary-glow",
          "shadow-glow hover:shadow-neon",
          "hover:scale-105 active:scale-95",
          "before:absolute before:inset-0 before:bg-white/10 before:scale-x-0 before:transition-transform before:duration-300",
          "hover:before:scale-x-100"
        ],
        neon: [
          "bg-transparent text-neon-cyan border-neon-cyan",
          "hover:bg-neon-cyan/10 hover:text-neon-cyan",
          "shadow-neon hover:shadow-glow",
          "animate-pulse-glow"
        ],
        gaming: [
          "bg-gaming-gray text-foreground border-border",
          "hover:bg-primary/20 hover:border-primary hover:text-primary",
          "shadow-gaming hover:shadow-glow"
        ],
        hero: [
          "bg-primary text-primary-foreground border-primary",
          "hover:bg-primary-glow hover:border-primary-glow",
          "shadow-glow hover:shadow-neon",
          "text-xl px-8 py-4 font-gaming font-bold",
          "hover:scale-105 active:scale-95 animate-pulse-glow"
        ]
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl"
      }
    },
    defaultVariants: {
      variant: "arcade",
      size: "md"
    }
  }
);

interface GamingButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gamingButtonVariants> {}

const GamingButton = forwardRef<HTMLButtonElement, GamingButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(gamingButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

GamingButton.displayName = "GamingButton";

export { GamingButton, gamingButtonVariants };