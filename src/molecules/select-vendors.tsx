import { useState } from "react";
import {
  Search,
  ChevronDown,
  Star,
  Clock,
  TrendingUp,
  Filter,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";

const mockVendors = [
  {
    id: 1,
    name: "LedgerTower",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
    rate: 88.0,
    trades: 1996,
    successRate: 95.2,
    limit: "10,000 - 37,500,000 INR",
    available: "1,707,587.47 USDT",
    paymentMethods: ["IMPS", "UPI", "Bank Transfer"],
    time: "60 min",
    verified: true,
  },
  {
    id: 2,
    name: "WEL-COMEP2PTRADERS",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    rate: 93.2,
    trades: 333,
    successRate: 100.0,
    limit: "21,000 - 21,715 INR",
    available: "233.00 USDT",
    paymentMethods: ["UPI"],
    time: "15 min",
    verified: true,
  },
  {
    id: 3,
    name: "kbl_Traders",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop",
    rate: 93.2,
    trades: 244,
    successRate: 98.4,
    limit: "20,000 - 20,100 INR",
    available: "215.73 USDT",
    paymentMethods: ["UPI"],
    time: "15 min",
    verified: true,
  },
  {
    id: 4,
    name: "DIGITAL_P2P_SERVICE",
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=400&h=300&fit=crop",
    rate: 93.17,
    trades: 236,
    successRate: 99.6,
    limit: "150,000 - 220,000 INR",
    available: "2,500.00 USDT",
    paymentMethods: ["IMPS", "UPI", "Bank Transfer", "PhonePe", "Google Pay"],
    time: "120 min",
    verified: true,
  },
  {
    id: 5,
    name: "Bannu2025",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=300&fit=crop",
    rate: 93.17,
    trades: 670,
    successRate: 99.8,
    limit: "18,000 - 30,000 INR",
    available: "445.50 USDT",
    paymentMethods: ["UPI", "IMPS"],
    time: "15 min",
    verified: true,
  },
  {
    id: 6,
    name: "CryptoKing_Exchange",
    image:
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=300&fit=crop",
    rate: 92.85,
    trades: 1523,
    successRate: 97.3,
    limit: "5,000 - 500,000 INR",
    available: "3,250.00 USDT",
    paymentMethods: ["UPI", "Bank Transfer", "Paytm"],
    time: "30 min",
    verified: true,
  },
];

export default function SelectVendors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCurrency] = useState("USDT");

  const filteredVendors = mockVendors.filter((vendor) =>
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectVendor = (vendor: any) => {
    console.log("Selected Vendor:", vendor);
    // Navigate to transaction page
    window.location.href = "/transaction";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-slate-800">Select Vendor</h1>
            <Badge
              variant="outline"
              className="text-green-600 border-green-600"
            >
              <TrendingUp className="w-3 h-3 mr-1" />
              Live Rates
            </Badge>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <span className="hidden sm:inline">{selectedCurrency}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filter</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredVendors.map((vendor) => (
            <Card
              key={vendor.id}
              className="hover:shadow-xl transition-all duration-300 border-slate-200 overflow-hidden group pt-0"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-[300px] object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  {vendor.verified && (
                    <Badge variant={"blue"}>✓ Verified</Badge>
                  )}
                </div>
              </div>

              <CardContent className="pt-4 space-y-3">
                {/* Vendor Name & Rating */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-800 truncate">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="text-xs font-medium">
                          {vendor.successRate}%
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        {vendor.trades} trades
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rate */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-slate-600 mb-1">Rate</p>
                      <p className="text-2xl font-bold text-slate-800">
                        ₹{vendor.rate}
                        <span className="text-sm text-slate-500 font-normal">
                          /USDT
                        </span>
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-slate-600">
                        <Clock className="w-3 h-3" />
                        <span className="text-xs">{vendor.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Limit & Available */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Limit:</span>
                    <span className="font-medium text-slate-800">
                      {vendor.limit}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Available:</span>
                    <span className="font-medium text-slate-800">
                      {vendor.available}
                    </span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="flex flex-wrap gap-1">
                  {vendor.paymentMethods.slice(0, 3).map((method, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs text-white"
                    >
                      {method}
                    </Badge>
                  ))}
                  {vendor.paymentMethods.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{vendor.paymentMethods.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  onClick={() => handleSelectVendor(vendor)}
                  className="w-full"
                >
                  Sell USDT
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">
              No vendors found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
