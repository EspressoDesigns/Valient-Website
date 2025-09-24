import { useState } from "react";
import { Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Editor", "Scripts", "Settings"];

  return (
    <nav className="bg-gaming-bg/95 backdrop-blur-md border-b border-border/50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* User Avatar and Profile */}
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-gaming flex items-center justify-center glow-effect">
            <User className="w-6 h-6 text-primary-foreground" />
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-2 ml-6">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`px-6 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Settings */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search scripts..."
              className="pl-10 w-64 bg-secondary/50 border-border/50 rounded-lg"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};