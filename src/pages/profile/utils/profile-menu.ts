import { CreditCard, Download, Gauge, Heart, LogOut, Logs, MapPinned, User } from "lucide-react";

export const profileMenu = [
  {
    title: "Dashboard",
    target: "/my-account",
    icon: Gauge,
  },
  {
    title: "Orders",
    target: "/my-account/orders",
    icon: Logs,
  },
  {
    title: "Downloads",
    target: "/my-account/downloads",
    icon: Download,
  },
  {
    title: "Addresses",
    target: "/my-account/addresses",
    icon: MapPinned,
  },
  {
    title: "Payment methods",
    target: "/my-account/payment-methods",
    icon: CreditCard,
  },
  {
    title: "Account details",
    target: "/my-account/account-details",
    icon: User,
  },
  {
    title: "Wishlist",
    target: "/wishlist",
    icon: Heart,
  },
  {
    title: "Log out",
    target: "/logout",
    icon: LogOut,
  },
];
