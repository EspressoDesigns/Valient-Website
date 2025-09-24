import { Code, Gamepad2, Settings, Users, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import editorMockup from "@/assets/editor-mockup.png";
import settingsMockup from "@/assets/settings-mockup.png";

const features = [
  {
    icon: Code,
    title: "Advanced Script Editor",
    description: "Professional code editor with syntax highlighting, auto-completion, and debugging tools.",
    image: editorMockup,
    color: "gaming-glow"
  },
  {
    icon: Gamepad2,
    title: "Game Integration",
    description: "Seamlessly connect and automate your favorite games with our powerful API.",
    color: "gaming-success"
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Fine-tune every aspect of your automation experience with our comprehensive settings.",
    image: settingsMockup,
    color: "gaming-warning"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with other users, share scripts, and collaborate on projects.",
    color: "gaming-glow"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with millisecond execution times and minimal resource usage.",
    color: "gaming-success"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with encrypted connections and secure script execution.",
    color: "gaming-warning"
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-24 px-6 bg-gaming-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-gaming-glow bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate, execute, and manage your scripts 
            with professional-grade tools and gaming-inspired design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-gaming p-6 group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </CardDescription>
                
                {feature.image && (
                  <div className="relative overflow-hidden rounded-lg border border-border/30">
                    <img
                      src={feature.image}
                      alt={`${feature.title} Interface`}
                      className="w-full h-32 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};