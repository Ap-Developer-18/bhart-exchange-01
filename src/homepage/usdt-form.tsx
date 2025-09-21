import { useState } from "react";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import { Alert, AlertDescription } from "../components/ui/alert";
import { ArrowRight, CheckCircle, Shield, Star } from "lucide-react";
import { Button } from "../components/ui/button";
import FormImage from "../assets/images/png/form-img.jpg";

const USDTFormSchema = z.object({
  usdt: z
    .string()
    .min(1, "USDT amount is required")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Please enter a valid USDT amount",
    })
    .refine((val) => parseFloat(val) >= 10, {
      message: "Minimum amount is 10 USDT",
    })
    .refine((val) => parseFloat(val) <= 50000, {
      message: "Maximum amount is 50,000 USDT",
    }),
  upi: z
    .string()
    .min(1, "UPI ID is required")
    .regex(
      /^[\w.-]+@[\w.-]+$/,
      "Please enter a valid UPI ID (e.g., yourname@paytm)"
    ),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit phone number starting with 6-9"
    ),
});

type USDTFormData = z.infer<typeof USDTFormSchema>;

const USDTForm = () => {
  const [formData, setFormData] = useState<USDTFormData>({
    usdt: "",
    upi: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const calculateINR = () => {
    const usdtAmount = parseFloat(formData.usdt) || 0;
    return (usdtAmount * 82.5).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // reset

    const result = USDTFormSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      setErrors(newErrors);
      return;
    }

    // ✅ if valid
    setLoading(true);
    setTimeout(() => {
      alert("Transaction started successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <section id="start-transaction" className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold font-rose mb-2">
            Start Your Transaction
          </h2>
          <p className="text-xl text-muted-foreground">
            Convert your USDT to INR in minutes
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 w-full h-fit">
          <div className="lg:col-span-7">
            <img
              className="object-cover h-full w-full rounded-xl"
              src={FormImage}
              alt="form image"
            />
          </div>
          <Card className="lg:col-span-5">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl">Exchange USDT → INR</CardTitle>
              <CardDescription>
                Fill in your details to begin the transaction
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* USDT Amount Input */}
                <div className="space-y-2">
                  <Label htmlFor="usdt" className="text-base font-semibold">
                    USDT Amount
                  </Label>
                  <div className="relative">
                    <Input
                      id="usdt"
                      type="number"
                      placeholder="Enter USDT amount (min: 10)"
                      value={formData.usdt}
                      onChange={(e) =>
                        setFormData({ ...formData, usdt: e.target.value })
                      }
                      className={`text-lg py-3 ${
                        errors.usdt ? "border-red-500" : ""
                      }`}
                    />
                    <div className="absolute right-3 top-1.5 text-muted-foreground font-medium">
                      USDT
                    </div>
                  </div>
                  {errors.usdt && (
                    <p className="text-red-500 text-sm">{errors.usdt}</p>
                  )}
                  {formData.usdt && !errors.usdt && (
                    <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                      <p className="text-green-700 dark:text-green-300 font-medium">
                        You'll receive: ₹{calculateINR()}
                      </p>
                    </div>
                  )}
                </div>
                <Separator />

                {/* UPI ID Input */}
                <div className="space-y-2">
                  <Label htmlFor="upi" className="text-base font-semibold">
                    UPI ID
                  </Label>
                  <Input
                    id="upi"
                    type="text"
                    placeholder="yourname@paytm"
                    value={formData.upi}
                    onChange={(e) =>
                      setFormData({ ...formData, upi: e.target.value })
                    }
                    className={`text-lg py-3 ${
                      errors.upi ? "border-red-500" : ""
                    }`}
                  />
                  {errors.upi && (
                    <p className="text-red-500 text-sm">{errors.upi}</p>
                  )}
                </div>

                {/* Phone Number Input */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`text-lg py-3 pl-12 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                      maxLength={10}
                    />
                    <div className="absolute left-3 top-1.5 text-muted-foreground">
                      +91
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Security Notice */}
                <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950">
                  <Shield className="w-4 h-4" />
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    Your information is encrypted and secure. We never store
                    sensitive data.
                  </AlertDescription>
                </Alert>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:scale-[1.02] transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Start Transaction
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust Badges */}
              <div className="pt-6 border-t">
                <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>KYC Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default USDTForm;
