import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Main from "./main/page";

export default function Home() {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
