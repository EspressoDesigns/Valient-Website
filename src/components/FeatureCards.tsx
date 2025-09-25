import { useEffect, useRef, useState } from "react";
import { Code, Gamepad2, Settings, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Script Tabs",
    description: "Organize your work with our ground breaking Tabs and Tab Grouping"
  },
  {
    icon: Gamepad2,
    title: "Game Integration", 
    description: "Seamlessly connect and automate your favorite games with powerful API integration"
  },
  {
    icon: Settings,
    title: "Advanced Settings",
    description: "Fine-tune every aspect of your automation experience with comprehensive controls"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with other users, share scripts, and collaborate on exciting projects"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized execution with millisecond response times and minimal resource usage"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade security with encrypted connections and secure script execution"
  }
];

// Duplicate features for infinite loop
const infiniteFeatures = [...features, ...features, ...features];

interface MousePosition {
  x: number;
  y: number;
}

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="relative min-w-[400px] h-[280px] bg-gradient-to-br from-gaming-surface/60 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/10 overflow-hidden group cursor-pointer continuous-float"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 140) * 0.1}deg) rotateY(${(mousePosition.x - 200) * 0.1}deg) translateZ(10px)`
          : 'none',
        transition: isHovered ? 'none' : 'transform 0.3s ease-out',
        animationDelay: `${index * 0.5}s`
      }}
    >
      {/* Continuous glow effect that follows mouse */}
      <div
        className={`absolute w-64 h-64 bg-gaming-accent2/15 rounded-full blur-xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          left: isHovered ? mousePosition.x - 128 : 200 - 128,
          top: isHovered ? mousePosition.y - 128 : 140 - 128,
          transition: isHovered ? 'opacity 0.3s ease-out' : 'all 3s ease-in-out'
        }}
      />
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gaming-accent2/10 flex items-center justify-center border border-gaming-accent2/20 glow-pulse">
          <feature.icon className="w-6 h-6 text-gaming-accent2" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-gaming-accent1 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      {/* Enhanced border glow on hover */}
      <div className="absolute inset-0 rounded-3xl border border-gaming-accent2/0 group-hover:border-gaming-accent2/40 transition-all duration-500" />
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-2 bg-gaming-accent1 rounded-full animate-pulse" />
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-gaming-accent2 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-gaming-accent1 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export const FeatureCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startCarousel = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
      }, 3000); // Faster carousel motion
    };

    startCarousel();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Don't pause on hover - keep continuous motion
  const handleMouseEnter = () => {
    // Remove the pause functionality to keep continuous motion
  };

  const handleMouseLeave = () => {
    // Remove the restart functionality to keep continuous motion
  };

  return (
    <section id="features" className="py-24 px-6 bg-gaming-bg/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-gaming-accent1 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate, execute, and manage your scripts 
            with professional-grade tools and gaming-inspired design.
          </p>
        </div>

        {/* Infinite Scrolling Cards with Continuous Animation */}
        <div 
          className="flex gap-8 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 408}px)`,
          }}
        >
          {infiniteFeatures.map((feature, index) => (
            <FeatureCard 
              key={`${feature.title}-${index}`}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gaming-accent2 shadow-glow scale-125' 
                  : 'bg-muted-foreground/20 hover:bg-muted-foreground/40 hover:scale-110'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};