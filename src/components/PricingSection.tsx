import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    name: "Daily",
    price: "$2.50",
    period: "per day",
    description: "Perfect for short-term projects and testing",
    features: [
      "Full access to all features",
      "Up to 100 script executions",
      "Standard support",
      "Basic analytics"
    ],
    popular: false,
    gradient: "from-gaming-accent2 to-primary"
  },
  {
    name: "Weekly", 
    price: "$8.00",
    period: "per week",
    description: "Great for weekly automation cycles",
    features: [
      "Full access to all features",
      "Up to 1,000 script executions",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"
    ],
    popular: true,
    gradient: "from-primary to-secondary"
  },
  {
    name: "Monthly",
    price: "$20.00", 
    period: "per month",
    description: "Most popular choice for regular users",
    features: [
      "Full access to all features",
      "Unlimited script executions",
      "24/7 priority support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "API access"
    ],
    popular: false,
    gradient: "from-gaming-accent2 to-gaming-accent1"
  },
  {
    name: "Yearly",
    price: "$75.00",
    period: "per year",
    description: "Best value for dedicated automation",
    features: [
      "Full access to all features",
      "Unlimited everything",
      "Dedicated support manager",
      "Custom analytics dashboard",
      "Priority API access",
      "Beta feature access",
      "Custom deployment options"
    ],
    popular: false,
    gradient: "from-secondary to-gaming-accent2"
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-gaming-bg to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-gaming-accent1 bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your automation needs. All plans include full access to our professional suite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative card-gaming p-6 group hover:scale-105 transition-all duration-500 continuous-float ${
                plan.popular ? 'ring-2 ring-primary/50 shadow-glow' : ''
              }`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: plan.popular ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-gaming-accent2 text-foreground px-4 py-1 glow-pulse">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gaming-accent1">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button className={`w-full mb-6 bg-gradient-to-r ${plan.gradient} text-foreground hover:scale-105 transition-all duration-300`}>
                  Get Started
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-gaming-accent2/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gaming-accent2" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include a 7-day free trial. No credit card required.
          </p>
          <Button variant="outline" className="border-gaming-accent2/30 hover:bg-gaming-accent2/10">
            Compare All Features
          </Button>
        </div>
      </div>
    </section>
  );
};