import { useState } from "react";
import { Search, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Features", "Pricing", "Contact"];

  const handleNavigation = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (tab === "Features") {
      document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "Pricing") {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gaming-surface/95 backdrop-blur-md border-b border-border/20 px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Profile and Brand */}
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-gaming-accent1">Valient</span>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-gaming-bg/60">
            <Search className="w-4 h-4 text-muted-foreground mx-3" />
          </div>
          
          <div className="flex gap-1 bg-gaming-bg/60 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-gaming-surface text-gaming-accent1 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-gaming-surface/50"
                }`}
                onClick={() => handleNavigation(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="border-gaming-accent2/30 text-gaming-accent2 hover:bg-gaming-accent2/10"
          >
            Download
          </Button>
        </div>
      </div>
    </nav>
  );
};