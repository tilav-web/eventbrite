import PageTitle from "@/components/common/page-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TrackOrder() {
  return (
    <div className="">
      <PageTitle title="Track Order" />
      <div className="max-w-[1200px] w-full mx-auto px-6 pt-14 pb-24">
        <p className="mb-6">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <form>
          <div className="flex items-center gap-12">
            <Label className="flex flex-col items-start flex-1">
              <p>Order ID</p>
              <Input
                className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base"
                placeholder="Found in your order confirmation email."
              />
            </Label>
            <Label className="flex flex-col items-start flex-1">
              <p>Billing email</p>
              <Input
                className="rounded-none p-4 py-6 border-none bg-[#f7f5f0] text-[#273659] text-base"
                placeholder="Email you used during checkout."
              />
            </Label>
          </div>
          <Button className="bg-[#5817ad] rounded-full px-6 my-3">Track</Button>
        </form>
      </div>
    </div>
  );
}
