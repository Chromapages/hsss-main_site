import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-grow pt-[57px] md:pt-0 has-bottom-nav md:pb-0">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
