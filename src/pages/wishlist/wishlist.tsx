import PageTitle from "@/components/common/page-title";
import { WishlistTable } from "./_components/wishlist-table";

export default function Wishlist() {
  return (
    <div>
      <PageTitle title="Wishlist" />
      <WishlistTable />
    </div>
  );
}
