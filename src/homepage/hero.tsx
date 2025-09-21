import { ArrowRight, CheckCircle, Shield, TrendingUp, Zap } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import HeroBgImg from "../assets/images/png/hero-bg.jpg";

const Hero = () => (
  <section className="relative py-24 overflow-hidden flex flex-col justify-center items-center lg:h-screen w-full">
    <img
      className="object-cover w-full h-full absolute top-0 left-0 opacity-30"
      src={HeroBgImg}
      alt="hero image"
    />

    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
    <div className="relative w-full mx-auto px-4">
      <div className="text-center space-y-8 w-full">
        <div className="space-y-4">
          <Badge variant="secondary" className="mx-auto text-white px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trusted by 50,000+ users
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent leading-[100%] font-rose">
            Sell USDT,
            <br />
            Get INR Instantly
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The most trusted platform for converting USDT to INR with instant
            UPI payouts. Secure, fast, and completely verified.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>Instant Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-500" />
            <span>Bank-level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span>2-minute Payouts</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="text-lg font-semibold transition-all duration-300 shadow-lg"
            onClick={() =>
              document
                .getElementById("start-transaction")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Trading Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">₹50M+</div>
            <div className="text-sm text-muted-foreground">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-sm text-muted-foreground">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2 min</div>
            <div className="text-sm text-muted-foreground">Avg Payout</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
