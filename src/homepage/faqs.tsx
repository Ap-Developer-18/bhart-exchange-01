import {
  Shield,
  Clock,
  IndianRupee,
  Smartphone,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const Faqs = () => {
  const faqData = [
    {
      category: "Getting Started",
      icon: <Smartphone className="w-5 h-5" />,
      questions: [
        {
          q: "How does the USDT to INR exchange work?",
          a: "Our platform allows you to exchange USDT for Indian Rupees in 3 simple steps: 1) Enter your USDT amount and UPI details, 2) Send USDT to our provided wallet address, 3) Receive INR directly to your UPI account after verification. The entire process is secure and typically completed within 30 minutes.",
        },
        {
          q: "What information do I need to start a transaction?",
          a: "You'll need: Your USDT amount to exchange, a valid UPI ID for receiving INR, your phone number for verification, and access to your USDT wallet to send the cryptocurrency.",
        },
        {
          q: "What is the current USDT to INR exchange rate?",
          a: "Our exchange rates are updated in real-time and displayed on the landing page. The rate includes a small service fee and is competitive with market rates. You'll see the exact INR amount you'll receive before confirming your transaction.",
        },
      ],
    },
    {
      category: "Transaction Process",
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          q: "How long do I have to send USDT after starting a transaction?",
          a: "You have exactly 15 minutes to send USDT to the provided wallet address after initiating a transaction. This timer ensures rate stability and prevents expired transactions. If you miss the deadline, you'll need to start a new transaction.",
        },
        {
          q: "What happens after I send USDT?",
          a: "Once you send USDT: 1) Our system automatically detects the blockchain transaction, 2) The transaction status changes from 'PENDING' to 'RECEIVED', 3) You can optionally upload a payment screenshot to speed up verification, 4) Our team reviews and approves the transaction, 5) INR is sent to your UPI account.",
        },
        {
          q: "Why do I need to upload a payment screenshot?",
          a: "Payment screenshots are optional but highly recommended as they help our verification team process your transaction faster. This speeds up the approval process and ensures quicker INR payouts to your UPI account.",
        },
        {
          q: "Can I cancel a transaction after sending USDT?",
          a: "Once USDT is sent to our wallet address, the transaction cannot be cancelled as blockchain transactions are irreversible. However, if there are any issues, our support team will assist you in resolving them.",
        },
      ],
    },
    {
      category: "Verification & Security",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          q: "How secure is the platform?",
          a: "We prioritize security with: Unique wallet addresses for each transaction, real-time blockchain monitoring, manual verification by our team, secure database encryption, and 24/7 monitoring. Your personal information and transactions are protected with industry-standard security measures.",
        },
        {
          q: "What happens during the verification process?",
          a: "During verification: 1) Our system confirms USDT receipt on the blockchain, 2) We verify the exact amount matches your order, 3) Our admin team reviews the transaction, 4) We check for any suspicious activity, 5) Once approved, INR payout is processed immediately.",
        },
        {
          q: "Why might a transaction be rejected?",
          a: "Transactions may be rejected if: USDT amount doesn't match the order, payment comes from a different wallet than expected, suspicious activity is detected, or technical issues occur. If rejected, you'll receive a detailed reason and our support team will help resolve the issue.",
        },
      ],
    },
    {
      category: "Payments & Fees",
      icon: <IndianRupee className="w-5 h-5" />,
      questions: [
        {
          q: "How do I receive INR payments?",
          a: "INR payments are sent directly to your UPI ID via UPI transfer. Ensure your UPI ID is active and correct when placing an order. Payments are typically processed within 30 minutes of transaction approval.",
        },
        {
          q: "What are the transaction fees?",
          a: "Our service fee is included in the displayed exchange rate. There are no hidden charges. The INR amount shown at the time of transaction creation is exactly what you'll receive in your UPI account.",
        },
        {
          q: "Are there minimum or maximum transaction limits?",
          a: "Yes, we have transaction limits for security and regulatory compliance. Minimum and maximum amounts are displayed on the platform and may vary based on current market conditions and regulatory requirements.",
        },
        {
          q: "What if the INR payment fails?",
          a: "If UPI payment fails, we'll attempt the transfer multiple times. If it continues to fail, our support team will contact you to verify your UPI details and process the payment manually. Your funds are always secure.",
        },
      ],
    },
    {
      category: "Account & Support",
      icon: <AlertCircle className="w-5 h-5" />,
      questions: [
        {
          q: "Do I need to create an account?",
          a: "Account creation depends on our current setup. Transaction details are saved using your phone number and UPI ID for tracking purposes. You can view your transaction history and status updates through our platform.",
        },
        {
          q: "How can I track my transaction history?",
          a: "Access your transaction history through our platform using your phone number. You'll see all past transactions with details like date, USDT sent, INR received, and current status (PENDING, RECEIVED, UNDER_REVIEW, COMPLETED, REJECTED).",
        },
        {
          q: "What support is available?",
          a: "We provide 24/7 customer support through multiple channels. Our support team can help with transaction issues, verification problems, payment delays, and general platform questions. Contact details are provided on our platform.",
        },
        {
          q: "How long does the entire process take?",
          a: "Typically, the entire process takes 30-60 minutes: Transaction creation (2 mins) → USDT transfer (5-15 mins) → Verification (10-30 mins) → INR payout (5-10 mins). Uploading payment screenshots can speed up verification.",
        },
      ],
    },
    {
      category: "Technical & Troubleshooting",
      icon: <CheckCircle className="w-5 h-5" />,
      questions: [
        {
          q: "Which USDT network should I use?",
          a: "Always use the network specified during transaction creation (usually TRC-20 or ERC-20). Using the wrong network will result in lost funds. The correct network and wallet address are clearly displayed with your transaction details.",
        },
        {
          q: "What if I sent USDT to the wrong address?",
          a: "Always double-check the wallet address before sending. If you sent to the wrong address, contact our support immediately. While we'll try to assist, blockchain transactions are irreversible, so prevention is key.",
        },
        {
          q: "Why is my transaction stuck in 'PENDING' status?",
          a: "Transactions remain PENDING if: USDT hasn't been sent yet, the 15-minute timer expired, blockchain confirmation is still processing, or the amount doesn't match. Check your wallet and blockchain explorer, or contact support.",
        },
        {
          q: "What if I encounter technical issues?",
          a: "For technical issues: Clear your browser cache, try a different browser, check your internet connection, or contact our 24/7 support team. We're always ready to help resolve any technical problems you might face.",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to know about our USDT to INR exchange platform
        </p>
      </div>

      {/* Transaction Status Guide */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Transaction Status Guide
          </CardTitle>
          <CardDescription>
            Understand what each transaction status means
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                status: "PENDING",
                desc: "Transaction created, waiting for USDT payment",
              },
              {
                status: "RECEIVED",
                desc: "USDT received and confirmed on blockchain",
              },
              {
                status: "UNDER_REVIEW",
                desc: "Transaction being verified by our team",
              },
              {
                status: "COMPLETED",
                desc: "INR successfully sent to your UPI account",
              },
              {
                status: "REJECTED",
                desc: "Transaction rejected - contact support for help",
              },
            ].map((item) => (
              <div key={item.status} className="text-center space-y-2">
                <Badge>{item.status}</Badge>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQ Sections */}
      {faqData.map((category, categoryIndex) => (
        <Card key={categoryIndex}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {category.icon}
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${categoryIndex}-${index}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      ))}

      {/* Contact Support Card */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Still Have Questions?</CardTitle>
          <CardDescription className="text-blue-700">
            Our 24/7 support team is here to help you with any questions or
            issues.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <h4 className="font-medium text-blue-900 mb-2">
                Quick Response Times
              </h4>
              <p className="text-sm text-blue-700">
                Average response time: Under 5 minutes during business hours,
                under 30 minutes for 24/7 support.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-blue-900 mb-2">
                Multiple Channels
              </h4>
              <p className="text-sm text-blue-700">
                Contact us via live chat, email, or phone. All contact details
                are available on our main platform.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Faqs;
