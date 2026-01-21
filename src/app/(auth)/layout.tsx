export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
}