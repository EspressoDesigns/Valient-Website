import { ArrowRight, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import homepageMockup from "@/assets/homepage-mockup.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(var(--gaming-glow)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-gaming-glow/20 text-gaming-glow border-gaming-glow/30 hover:bg-gaming-glow/30">
                New Release • v2.0
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Espresso
                </span>
                <br />
                <span className="text-muted-foreground text-4xl lg:text-5xl">
                  Automation Suite
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                The ultimate automation and scripting platform. Execute, manage, and deploy 
                your scripts with the power of a professional gaming-grade interface.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="border-border/50 hover:bg-secondary/50 px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-glow">250K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-success">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gaming-warning">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Interface Image */}
          <div className="relative lg:justify-self-end">
            <div className="relative">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gaming-glow/20 to-accent/20 rounded-3xl blur-xl opacity-75" />
              <div className="absolute -inset-2 bg-gradient-to-r from-gaming-glow/30 to-accent/30 rounded-2xl blur-lg opacity-50" />
              
              {/* Main Interface Image */}
              <div className="relative float-animation">
                <img
                  src={homepageMockup}
                  alt="Espresso Interface - Homepage Dashboard"
                  className="w-full max-w-lg rounded-2xl shadow-floating border border-border/20 glow-effect"
                />
              </div>

              {/* Floating UI Elements */}
              <div className="absolute -left-6 top-20 card-gaming p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gaming-success/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-gaming-success" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Script Running</div>
                    <div className="text-xs text-muted-foreground">Auto-Execute</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-24 card-gaming p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gaming-glow/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gaming-glow" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">15 Games</div>
                    <div className="text-xs text-muted-foreground">Connected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};