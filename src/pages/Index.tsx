import React from "react";
import ThreeDCardDemo from "@/components/3d-card-demo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-3d-cards.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Flexi Flip UI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the magic of 3D perspective cards that respond to your every move. 
              Hover, interact, and watch your content come alive.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-3d">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Card Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Interactive 3D Cards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Move your mouse over the card below to see the 3D perspective effect in action
            </p>
          </div>
          
          <div className="flex justify-center">
            <ThreeDCardDemo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for Modern Web
            </h2>
            <p className="text-lg text-muted-foreground">
              Powered by React, TypeScript, and Tailwind CSS
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">3D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">3D Transforms</h3>
              <p className="text-muted-foreground">
                CSS 3D transforms create realistic depth and perspective effects
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                Optimized animations using hardware acceleration for smooth 60fps
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground">
                Fully themeable with Tailwind CSS and design system tokens
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;