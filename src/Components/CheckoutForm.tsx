import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import "../index.css";

const CheckoutForm = () => {
  return (
    <div className="App w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold text-[#EDF1E4] text-left">
              Checkout
            </h1>
            <p className="text-muted-foreground text-[#EDF1E4] text-left">
              Enter your information to complete your purchase.
            </p>
          </div>
          <div className="grid gap-4 bg-[#002b23]">
            <div className="grid gap-2 text-[#EDF1E4] bg-[#002b23]">
              <Label htmlFor="name">Name</Label>
              <Input
                className="bg-[#002b23]"
                id="name"
                placeholder="John Doe"
                required
                type="text"
              />
            </div>

            <div className="grid gap-2 text-[#EDF1E4]">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                className="bg-[#002b23]"
                id="mobile"
                placeholder="+1 (123) 456-7890"
                required
                type="tel"
              />
            </div>
            <div className="grid gap-2 text-[#EDF1E4]">
              <Label htmlFor="email">Email</Label>
              <Input
                className="bg-[#002b23]"
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2 text-[#EDF1E4]">
              <Label htmlFor="address">Billing Address</Label>
              <Input
                className="bg-[#002b23]"
                id="address"
                placeholder="123 Main St, Anytown USA"
                required
                type="text"
              />
            </div>
            <div className="grid gap-2 text-[#EDF1E4]">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center justify-center text-[#002b23] bg-[#edf1e4] rounded-md p-4 hover:bg-[#fff]">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="razorpay"
                    className="mr-2"
                  />
                  Razorpay
                </label>
                <label className="flex items-center justify-center text-[#002b23] bg-[#edf1e4] rounded-md p-4 hover:bg-[#fff]">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stripe"
                    className="mr-2"
                  />
                  Stripe
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-12">
        <Card className="mx-auto max-w-md bg-[#edf1e4] dark:bg-gray-800 rounded-lg border border-[#001e18]-900 dark:border-[#001e18]-900 shadow-lg ">
          <CardHeader className="px-6 py-4 border-b border-gray-900 dark:border-gray-600">
            <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="px-6 py-4 grid gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width={64}
                /> */}
                <div>
                  <h4 className="font-medium">Codemarch Premium</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Access to All Codemarch Codecamps + Whatsapp 24/7 Tech Support
                  </p>
                </div>
              </div>
              <span className="font-medium">$49.99</span>
            </div>
            <Separator className="border-gray-200 dark:border-gray-600" />
            <div className="flex items-center justify-between font-bold">
              <span>Total</span>
              <span>$155.97</span>
            </div>
          </CardContent>
          <CardFooter className="px-6 py-4 border-t border-gray-200 dark:border-gray-600">
            <Button className="w-full bg-[#002b23] hover:bg-[#3d8361]" type="submit">
              Place Order
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;
