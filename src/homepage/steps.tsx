import { ArrowRight, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const Steps = () => {
  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Enter Details",
      description: "Specify USDT amount and your UPI ID for instant payout",
      color: "text-blue-500",
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Send USDT",
      description: "Transfer to our secure wallet using the generated address",
      color: "text-purple-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Receive INR",
      description: "Get INR credited to your account within 2 minutes",
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-2 font-rose">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, secure, and super fast
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl gap-0 transition-all duration-300"
            >
              <CardHeader className="flex justify-center pb-4">
                <div
                  className={`inline-flex w-fit p-4 rounded-full bg-secondary/10 ${step.color} mb-4`}
                >
                  {step.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="font-bold text-2xl mb-2 font-rose leading-[170%]">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
