import { type PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 pr-10 pl-10 pb-4">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
