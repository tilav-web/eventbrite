import { Outlet } from "react-router-dom";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
