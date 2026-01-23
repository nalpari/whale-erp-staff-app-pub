import Footer from "@/components/ui/Footer";
import SubHeader from "@/components/ui/SubHeader";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <SubHeader />
      <div className="auth-container">
        {children}
      </div>
      <Footer/>
    </div>
  );
}