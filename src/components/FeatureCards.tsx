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
      className="relative min-w-[400px] h-[280px] bg-gradient-to-br from-gaming-surface/80 to-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/20 overflow-hidden group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${(mousePosition.y - 140) * 0.1}deg) rotateY(${(mousePosition.x - 200) * 0.1}deg) translateZ(10px)`
          : 'none',
        transition: isHovered ? 'none' : 'transform 0.3s ease-out'
      }}
    >
      {/* Glow effect that follows mouse */}
      {isHovered && (
        <div
          className="absolute w-64 h-64 bg-gaming-glow/20 rounded-full blur-xl pointer-events-none"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      )}
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gaming-glow/10 flex items-center justify-center border border-gaming-glow/20">
          <feature.icon className="w-6 h-6 text-gaming-glow" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-gaming-glow transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {feature.description}
        </p>
      </div>
      
      {/* Subtle border glow on hover */}
      <div className="absolute inset-0 rounded-3xl border border-gaming-glow/0 group-hover:border-gaming-glow/30 transition-all duration-300" />
    </div>
  );
};

export const FeatureCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);
  };

  return (
    <section className="py-24 px-6 bg-gaming-bg/50 overflow-hidden">
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

        {/* Infinite Scrolling Cards */}
        <div 
          className="flex gap-8 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 408}px)`,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {infiniteFeatures.map((feature, index) => (
            <FeatureCard 
              key={`${feature.title}-${index}`}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gaming-glow shadow-glow' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};