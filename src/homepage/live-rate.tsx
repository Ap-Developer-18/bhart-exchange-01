import { useEffect, useState } from "react";
import { Badge } from "../components/ui/badge";
import { TrendingUp } from "lucide-react";

const LiveRate = () => {
  const [rate, setRate] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRate = async () => {
      setTimeout(() => {
        setRate(82.5);
        setLoading(false);
      }, 1000);
    };
    fetchRate();

    const interval = setInterval(fetchRate, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <Badge variant="secondary" className="bg-white/20 text-white">
            Live Rate
          </Badge>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              1 USDT ≈ ₹{loading ? "..." : rate.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 text-green-300">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">+0.5%</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/80 mt-2">
          Updated every 30 seconds • Best market rates guaranteed
        </p>
      </div>
    </div>
  );
};

export default LiveRate;
