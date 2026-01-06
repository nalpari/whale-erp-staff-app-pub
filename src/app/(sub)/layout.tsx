import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
}
