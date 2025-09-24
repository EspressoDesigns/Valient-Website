import { useState } from "react";
import { Search, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Features");
  const tabs = ["Features", "Pricing", "Download", "Contact"];

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Features") {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "Pricing") {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gaming-bg/95 backdrop-blur-md border-b border-border/30 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Logo and Profile */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-pulse">
              <User className="w-6 h-6 text-foreground" />
            </div>
            <h1 className="text-xl font-bold text-gaming-accent1">Espresso</h1>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-1 ml-8">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary/20 text-primary border border-primary/30 shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                }`}
                onClick={() => handleNavigation(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Download */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search features..."
              className="pl-10 w-64 bg-secondary/30 border-border/30 rounded-lg text-foreground placeholder:text-muted-foreground"
            />
          </div>
          
          <Button className="bg-gradient-to-r from-gaming-accent2 to-primary text-foreground hover:scale-105 transition-all duration-300">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
};