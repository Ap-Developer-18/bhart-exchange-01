import { Clock, Lock, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description:
        "Multi-layer encryption with blockchain verification for ultimate security",
      color: "text-blue-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Average payout time of 2 minutes with 24/7 automated processing",
      color: "text-yellow-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support team with live chat and phone assistance",
      color: "text-green-500",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "KYC Compliant",
      description:
        "Fully regulated and compliant with Indian financial regulations",
      color: "text-purple-500",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Best Rates",
      description: "Competitive exchange rates updated in real-time",
      color: "text-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Available",
      description: "Trade anytime with our 99.9% uptime guarantee",
      color: "text-indigo-500",
    },
  ];

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2 font-rose">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by thousands of traders across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex p-3 rounded-lg bg-secondary/10 ${feature.color} mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
