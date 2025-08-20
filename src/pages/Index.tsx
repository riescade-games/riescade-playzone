import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedGames from "@/components/home/FeaturedGames";
import GameCategories from "@/components/home/GameCategories";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedGames />
      <GameCategories />
    </Layout>
  );
};

export default Index;
