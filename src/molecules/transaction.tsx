import React, { useState, useEffect } from "react";
import {
  Copy,
  CheckCircle,
  Clock,
  AlertTriangle,
  ArrowRight,
  Wallet,
  Upload,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Button } from "../components/ui/button";

export default function Transaction() {
  const [step, setStep] = useState(1);
  const [usdtAmount, setUsdtAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [walletAddress] = useState("TRX7n4VQqXY8kqE9PW2ngNvB7ZLqw3Xa9d");
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [copied, setCopied] = useState(false);
  const [proofUploaded, setProofUploaded] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");

  const rate = 93.2;
  const inrAmount = (parseFloat(usdtAmount) || 0) * rate;

  useEffect(() => {
    if (step === 2 && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInitiateTransaction = () => {
    if (!usdtAmount || !upiId || !phoneNumber) {
      alert("Please fill all fields");
      return;
    }
    console.log("Transaction Data:", { usdtAmount, upiId, phoneNumber });
    setStep(2);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofUploaded(true);
      console.log("File uploaded:", e.target.files[0]);
    }
  };

  const handleSubmitProof = () => {
    if (!transactionHash) {
      alert("Please enter transaction hash");
      return;
    }
    console.log("Proof submitted:", { transactionHash, proofUploaded });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-5 left-0 right-0 h-1 bg-slate-200 -z-10">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>

            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step >= num
                      ? "bg-green-700 text-white shadow-lg"
                      : "bg-white text-slate-400 border-2 border-slate-200"
                  }`}
                >
                  {step > num ? <CheckCircle className="w-5 h-5" /> : num}
                </div>
                <span className="text-xs mt-2 text-slate-600 font-medium">
                  {num === 1
                    ? "Enter Details"
                    : num === 2
                    ? "Send USDT"
                    : "Confirmation"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Enter Details */}
        {step === 1 && (
          <Card className="shadow-xl border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl">
                Enter Transaction Details
              </CardTitle>
              <CardDescription>
                Fill in the details to start your USDT to INR exchange
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Exchange Rate Info */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Current Rate:</span>
                  <span className="text-2xl font-bold text-slate-800">
                    ₹{rate}/USDT
                  </span>
                </div>
              </div>

              {/* USDT Amount */}
              <div className="space-y-2">
                <Label htmlFor="usdt">USDT Amount</Label>
                <div className="relative">
                  <Input
                    id="usdt"
                    type="number"
                    placeholder="Enter USDT amount"
                    value={usdtAmount}
                    onChange={(e) => setUsdtAmount(e.target.value)}
                    className="text-lg"
                  />
                  <Badge className="absolute right-3 top-3 bg-blue-600">
                    USDT
                  </Badge>
                </div>
                {usdtAmount && (
                  <p className="text-sm text-slate-600">
                    You will receive:{" "}
                    <span className="font-semibold text-green-600">
                      ₹{inrAmount.toFixed(2)}
                    </span>
                  </p>
                )}
              </div>

              {/* UPI ID */}
              <div className="space-y-2">
                <Label htmlFor="upi">UPI ID</Label>
                <Input
                  id="upi"
                  type="text"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Please ensure your UPI ID is correct. INR will be sent to this
                  UPI ID only.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleInitiateTransaction}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 2: Send USDT */}
        {step === 2 && (
          <Card className="shadow-xl border-slate-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Send USDT</CardTitle>
                  <CardDescription>
                    Transfer USDT to the wallet address below
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <Clock className="w-5 h-5" />
                  <span className="text-2xl font-bold">
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-slate-600 mb-1">You Send</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {usdtAmount} USDT
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-slate-600 mb-1">You Receive</p>
                  <p className="text-2xl font-bold text-green-600">
                    ₹{inrAmount.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Wallet Address */}
              <div className="space-y-2">
                <Label>Wallet Address (TRC20)</Label>
                <div className="flex gap-2">
                  <Input
                    value={walletAddress}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button onClick={handleCopy} variant="outline" size="icon">
                    {copied ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* QR Code Placeholder */}
              <div className="bg-white rounded-lg p-6 border-2 border-dashed border-slate-300 flex flex-col items-center">
                <div className="w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="w-16 h-16 text-slate-400" />
                </div>
                <p className="text-sm text-slate-600 text-center">
                  Scan QR code to send USDT
                </p>
              </div>

              {/* Transaction Hash */}
              <div className="space-y-2">
                <Label htmlFor="txHash">Transaction ID</Label>
                <Input
                  id="txHash"
                  type="text"
                  placeholder="Enter transaction ID"
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                  className="font-mono text-sm"
                />
              </div>

              {/* Upload Proof */}
              <div className="space-y-2">
                <Label>Upload Payment Proof</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="proof-upload"
                  />
                  <label htmlFor="proof-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                    <p className="text-sm text-slate-600">
                      {proofUploaded
                        ? "✓ Screenshot uploaded"
                        : "Click to upload screenshot"}
                    </p>
                  </label>
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Only send USDT (TRC20) to this address. Sending other coins
                  may result in loss of funds.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleSubmitProof}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                I've Sent USDT
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <Card className="shadow-xl border-slate-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">
                Transaction Under Review
              </CardTitle>
              <CardDescription>
                Your transaction is being verified by our team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Transaction Details */}
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Transaction ID:</span>
                  <span className="font-mono font-semibold">
                    TXN{Date.now().toString().slice(-8)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">USDT Sent:</span>
                  <span className="font-semibold">{usdtAmount} USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">INR to Receive:</span>
                  <span className="font-semibold text-green-600">
                    ₹{inrAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">UPI ID:</span>
                  <span className="font-semibold">{upiId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Status:</span>
                  <Badge className="bg-yellow-500">Under Review</Badge>
                </div>
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  We are verifying your USDT transaction. You will receive INR
                  in your UPI within 10-30 minutes after verification.
                </AlertDescription>
              </Alert>

              {/* What's Next */}
              <div className="border border-slate-200 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-slate-800">
                  What happens next?
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">1.</span>
                    <span>
                      Our system detects your USDT transaction on blockchain
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">2.</span>
                    <span>
                      Admin verifies the transaction amount and details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">3.</span>
                    <span>INR is transferred to your UPI ID automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">4.</span>
                    <span>You receive a confirmation notification</span>
                  </li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => (window.location.href = "/transactions")}
              >
                View History
              </Button>
              <Button
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600"
                onClick={() => (window.location.href = "/")}
              >
                Go to Home
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
